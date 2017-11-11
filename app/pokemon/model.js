import DS from 'ember-data';
import { attr } from "ember-decorators/data";

export default DS.Model.extend({
    @attr('number') simplecastEpisodeId,
    @attr('string') name,
    @attr('string') description,
    @attr('string') tier
});
