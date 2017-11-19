import { inject as service } from '@ember/service';
import Component from '@ember/component';
export default Component.extend({
  store: service(),
  tagName: '',
  expanded: false,
  episodeDetails: undefined,
  actions: {
    expand() {
      if (!this.get('episodeDetails')) {
        console.log('episodeId: ' + this.get('pokemon.simplecastEpisodeId'));
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
