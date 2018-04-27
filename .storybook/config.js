import {configure, storiesOf} from '@storybook/polymer';

const requireIndex = require.context('../src', true, /\.html$/);
const requireStory = require.context('../src', true, /\.stories.js$/);

function loadDefaultStories() {
    requireIndex.keys().forEach(filename => requireIndex(filename));
    requireIndexkeys().forEach(filename => storiesOf(filename, module).add('auto-generated default', () => '<' + filename + '>This is a some demo text to test the word count element</' + filename + '>'));
}

function loadStories() {
    requireStory.keys().forEach(filename => requireStory(filename));
}

configure(loadDefaultStories(), module);
configure(loadStories, module);
