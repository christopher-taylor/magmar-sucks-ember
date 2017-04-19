import DS from 'ember-data';

export default DS.Model.extend({
    // number: DS.attr('string'),
    simplecastEpisodeId: DS.attr('number'),
    name: DS.attr('string'),
    description: DS.attr("string"),
    tier: DS.attr('string')
});
