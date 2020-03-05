# vue-cli-plugin-docs

> documentation generator plugin for vue-cli

## Purpose

The goal of this project is to provide a way to store your vue components documentation within your single file format and then compile it into a single README.md file for distribution.  Since ***[Vuter](https://marketplace.visualstudio.com/items?itemName=octref.vetur)*** already supports syntax highlighting for markdown inside a `<docs></docs>` tag it allows us to keep a components documentation inside the same file we define our component.

``` html
<docs>
    # My Component Documentation
</docs>
<template>
    ...
</template>

<script>
    export default {
        name: 'MyComponent'
    }
</script>

<style>

</style>
```

Then when we are ready to generate our documentation, this plugin gathers up all of these components documentation and combines them into a single README.md file

``` sh
npm run document
```

## Installing in an Already Created Project

``` sh
vue add vue-cli-plugin-docs
```

## Configurations

The vue-cli-plugin-docs plugin allows for the following configurations to be added to your vue.config.js file inside the following location.

``` js
module.exports = {
    pluginOptions: {
        docs: {
            // Configurations go here...
        }
    }
}
```

### auto

If you want the plugin to generate your README each time you execute a `npm run build` command, add the `auto: true` configuration.
``` js
module.exports = {
    pluginOptions: {
        docs: {
            auto: true
        }
    }
}
```
This value is `false` by default.

### outputDir

Be default the plugin places your combined README file in the root of the vue working directory.  If you want to change this to another location you can override this by setting the `outputDir` configuration.
``` js
const { resolve } = require('path');
module.exports = {
    pluginOptions: {
        docs: {
            outputDir: resolve(__dirname, '/dist'))
        }
    }
}
```

***Note:***   
This expects an absolute path. Use path.resolve and the __dirname to get to the root directory.

### fileName

Be default the plugin generates a file with the name README.md.  If you want to change this to a different file name you can override this by setting the `fileName` configuration.
``` js
const { resolve } = require('path');
module.exports = {
    pluginOptions: {
        docs: {
            fileName: "NotReadme.md"
        }
    }
}
```

## Generating the documentation file.

As stated above, if you set the `auto` configuration to `true` then the plugin will generate the file every time you run `nmp run build`.  But if you do not want this process to run automatically and would prefer to generate the file on demand you can execute the following command:

``` sh
npm run document
```

        or 
``` sh
vue-cli-service document
```

This will start the process of gathering up the .vue file docs sections and combining them into the single file.

## What this project is NOT

We are not trying to compete with [Vue Styleguidist](https://vue-styleguidist.github.io/) or [vue-docgen-cli](https://vue-styleguidist.github.io/docs/docgen-cli.html) as these are both excellent products that can offer you JDOC and Prop extraction along with a React driven hot reload feature.  My goal in this project was simple, I did not need all of those features and simply wanted a way to keep the documentation markdown for my components in the same file as my component, and then extract it during build time into a full README.md file for distribution.  I thought someone else might find this useful as well so decided to create this package and share it on npm.

Please do not ask me to add features such as JDOC extraction or Component Prop mapping as I have no intentions of adding these features.  I prefer full control over my documentation markdown and simply wanted a way to organize it better without losing the full README document.  If you like the overall plugin and want JDOC support, feel free to Fork this repo and add it in for yourself.

I am not saying I won't add features if requested, just please understand that I am not trying to recreate an existing product.

## Some Suggestions

Since the plugin starts at the root folder and processes files in each folder, then that folders subdirectories, If you want a Table of Contents or main head sections for your README.md file I suggest adding that markdown in the `App.vue` file or whatever your main entry point .vue file is.  This will usually be at the root of your `src` folder.
