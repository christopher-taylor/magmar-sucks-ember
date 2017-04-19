import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    urlForQuery (query, modelName){
        return `/data/${query}.json`;
    }
});
