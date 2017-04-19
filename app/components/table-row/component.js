import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  expanded: false,
  episodeDetails: undefined,
  actions: {
    expand() {
      if (!this.get('episodeDetails')) {
        Ember.$.ajax(`https://api.simplecast.com/v1/podcasts/2597/episodes/${this.get('pokemon.simplecastEpisodeId')}.json?api_key=sc_7TG3ktOxQ6N_r7halBSboA`)
        .done((data) => {
            this.set('episodeDetails', data)
            this.toggleProperty('expanded');
        });
      } else {
        this.toggleProperty('expanded');
      }
    }
  }
});
