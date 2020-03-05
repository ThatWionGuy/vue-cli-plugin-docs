{::options parse_block_html="true" /}
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
        // Configurations go here...
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

Be default the plug places your combined README file in the root of the vue working directory.  If you want to change this to another location you can override this by setting the `outputDir` configuration.
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
<div class="panel panel-gitlab-purple">
***Note:*** This expects an absolute path. Use path.resolve and the __dirname to get to the root directory.
{: .panel-heading}
</div>

***Note:*** This expects an absolute path. Use path.resolve and the __dirname to get to the root directory.
{: .alert .alert-gitlab-purple}


## Markdown Style Guide

GitHub supports a lot of unique markdown styling aids that can help you really dress up your README files.

Go to ***[Markdown Styling Guide](https://about.gitlab.com/handbook/engineering/ux/technical-writing/markdown-guide/)*** for some great ideas.
