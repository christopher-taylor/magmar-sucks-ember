import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    urlForQuery (query){
        return `/data/${query}.json`;
    }
});
