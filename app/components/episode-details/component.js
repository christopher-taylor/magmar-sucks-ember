import Ember from 'ember';

const CONVERTER = new showdown.Converter();

export default Ember.Component.extend({
  showNotes: Ember.computed('data', function() {
    return Ember.String.htmlSafe(CONVERTER.makeHtml(this.get('data').long_description));
  })
});
