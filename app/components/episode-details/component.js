import Ember from 'ember';
import computed from 'ember-computed-decorators';

const CONVERTER = new showdown.Converter();

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['expanded::no-show'],

  @computed('data')
  showNotes(data) {
    return Ember.String.htmlSafe(CONVERTER.makeHtml(data.shownotes));
  }
});
