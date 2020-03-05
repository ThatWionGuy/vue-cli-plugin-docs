const { resolve } = require('path');
const docsParser = require('./parser');

module.exports = (api, options) => {

    // Configure our working parameters.
    let outputDir = api.getCwd();
    let outputFilename = 'README.md';
    let automate = false;
    if (options.pluginOptions && options.pluginOptions.docs) {
        outputDir = options.pluginOptions.docs.outputDir || outputDir;
        outputFilename = options.pluginOptions.docs.fileName || outputFilename;
        automate = options.pluginOptions.docs.auto || automate;
    }

    // Resolve the output file name.
    const outputFile = resolve(outputDir, outputFilename);

    // Only wire up the build override if automate is true.
    if (automate) {
        const { build } = api.service.commands
        const buildFn = build.fn

        async function newBuild(...args){
            // First call the actual build function so that it can complete.
            let funcReturn = await buildFn(...args);
            // Then generate the Documentation.
            await docsParser.run(api.getCwd(), outputFile);
            // Lastly return the response from the build function. 
            return funcReturn;
        }

        build.fn = newBuild;
    }

    // Add the document command
    api.registerCommand(
        'document',
        {
            description: 'Generates a README file based on .vue component <docs></docs> section.',
            usage: 'vue-cli-service document'
        },
        () => {

            docsParser.run(api.getCwd(), outputFile);
        }
    )
}