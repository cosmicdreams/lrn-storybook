import {configure, storiesOf} from '@storybook/polymer';

const req = require.context('../src', true, /\.html$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  req.keys().forEach(filename => storiesOf(filename, module).add('default view', () => '<word-count>This is a some demo text to test the word count element</word-count>'));
}

configure(loadStories, module);
