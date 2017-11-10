import { htmlSafe } from '@ember/string';
import Component from '@ember/component';
import computed from 'ember-computed-decorators';

const CONVERTER = new showdown.Converter();

export default Component.extend({
  tagName: 'tr',
  classNameBindings: ['expanded::no-show'],

  @computed('data')
  showNotes(data) {
    return htmlSafe(CONVERTER.makeHtml(data.get('shownotes')));
  }
});
