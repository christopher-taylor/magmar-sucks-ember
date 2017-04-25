import DS from 'ember-data';
import { attr } from "ember-computed-decorators/ember-data";

export default DS.Model.extend({
    @attr('string') title,
    @attr('string') date,
    @attr('number') simplecastId,
    @attr('string') description,
    @attr('string') shownotes,
    @attr('string') imageSmall,
    @attr('string') imageMedium,
    @attr('string') imageLarge
});
