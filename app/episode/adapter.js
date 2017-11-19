import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://api.simplecast.com',
  namespace: 'v1/podcasts',

  findAll(modelName, snapshot) {
    return $.ajax(`${this.get('host')}/${this.get('namespace')}/2597/episodes.json?api_key=sc_7TG3ktOxQ6N_r7halBSboA`);
  },

  findRecord(store, type, id, snapshot) {
    console.log(id);
    return $.ajax(`${this.get('host')}/${this.get('namespace')}/2597/episodes/${id}.json?api_key=sc_7TG3ktOxQ6N_r7halBSboA`);
  }
});
