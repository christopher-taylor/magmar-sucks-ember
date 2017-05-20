import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service(),
  tagName: '',
  expanded: false,
  episodeDetails: undefined,
  actions: {
    expand() {
      if (!this.get('episodeDetails')) {
        let episode = this.get('store').peekRecord('episode', this.get('pokemon.simplecastEpisodeId'));
        console.log(episode);
        this.set('episodeDetails',
        episode);
        this.toggleProperty('expanded');
        } else {
        this.toggleProperty('expanded');
      }
    }
  }
});
