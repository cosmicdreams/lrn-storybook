# lrn-storybook
Provides a storybookjs based component library for tinkering

## Requirements
* Bower
* Node / NPM
* Yarn

## Installation
After checking out this repo run the following commands to get this working.

```
yarn
bower 

yarn storybook
```

This should provide you a link that you can click on to see your new component library.

## Add your own elements

After getting this running, you can add your own elements to the /src directory.  By default the storybook is configured to discover all of your *.html files and surface them in the component library as custom elements.  If you want to take control over how the demo appears you'll need to add custom stories to the storbook.  
To do that add a <element-name>.stories.js file near the element (recommendation: add a story folder to your element).  Then use the documentation here to write your own stories:

https://storybook.js.org/basics/writing-stories/

Note: We'll update this documentation to point to polymer specific examples when they exist.
