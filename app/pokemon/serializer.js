import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType){
        let output = {};
        let data = [];
        let record = {};
        let attributes = {}
        payload.forEach((pokemon) => {
            if(pokemon.d){
                record = {};
                attributes = {};
                record.id = pokemon.b;
                record.type = 'pokemon';
                attributes.name = pokemon.a;
                attributes.simplecastEpisodeId = pokemon.d;
                attributes.description = pokemon.e;
                attributes.tier = pokemon.c;
                record.attributes = attributes;
                data.push(record);
            }
        });
        output.data = data;
        output.meta = {};
        return output;
    }
});
