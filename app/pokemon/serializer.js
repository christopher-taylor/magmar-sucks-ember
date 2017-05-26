import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let output = {};
    let data = [];
    let record = {
      type: "pokemon"
    };
    let attributes = {}
    payload.forEach((pokemon) => {
      if (pokemon[3]) {
        record = {
          type: "pokemon"
        };
        attributes = {};
        record.id = pokemon[1];
        attributes.name = pokemon[0];
        attributes.simplecastEpisodeId = pokemon[3];
        attributes.description = pokemon[2];
        attributes.tier = parseInt(pokemon[4]);
        record.attributes = attributes;
        data.push(record);
      }
    });
    output.data = data;
    output.meta = {};
    return output;
  }
});
