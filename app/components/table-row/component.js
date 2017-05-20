import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service(),
  tagName: '',
  expanded: false,
  episodeDetails: undefined,
  actions: {
    expand() {
      if (!this.get('episodeDetails')) {
        this.get('store').findRecord('episode', this.get('pokemon.simplecastEpisodeId')).then((episode) => {
            this.set('episodeDetails', episode);
            this.toggleProperty('expanded');
        });
        } else {
        this.toggleProperty('expanded');
      }
    }
  }
});
