import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://api.simplecast.com',
    namespace: 'v1/podcasts',
    urlForQuery(){
        return `${this.get('host')}/${this.get('namespace')}/2597/episodes.json?api_key=sc_7TG3ktOxQ6N_r7halBSboA`;
    }
});
