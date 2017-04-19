import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    date: DS.attr('string'),
    simplecastId: DS.attr('number'),
    description: DS.attr('string'),
    shownotes: DS.attr('string'),
    imageSmall: DS.attr('string'),
    imageMedium: DS.attr('string'),
    imageLarge: DS.attr('string')
});
