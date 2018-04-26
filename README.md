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
bower install

yarn storybook
```

This should provide you a link that you can click on to see your new component library.

## Add your own elements

After getting this running, you can add your own elements to the /src directory.  By default the storybook is configured to discover all of your *.html files and surface them in the component library as custom elements.  If you want the storybook to behave like standard (requiring you add your own *.stories.js files) modify the config.js to be like this:

```$js
import {configure} from '@storybook/polymer';

const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
```  
