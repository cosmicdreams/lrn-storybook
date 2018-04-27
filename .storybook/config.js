import {configure, storiesOf} from '@storybook/polymer';

const requireIndex = require.context('../src', true, /\.html$/);
const requireStory = require.context('../src', true, /\.stories.js$/);

function loadDefaultStories() {
    requireIndex.keys().forEach(filename => requireIndex(filename));
    requireIndex.keys().forEach(filename => generateDefaultStories(filename));
}

function generateDefaultStories(filename) {
    let element = filename.match(/[a-z]*-[a-z]*/);
    storiesOf(element, module).add('auto-generated default', () => '<' + element + '>testing one two three</' + element + '>');
}

function loadStories() {
    requireStory.keys().forEach(filename => requireStory(filename));
}

configure(loadDefaultStories(), module);
configure(loadStories, module);
