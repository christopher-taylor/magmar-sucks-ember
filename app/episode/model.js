import DS from 'ember-data';
import { attr } from "ember-decorators/data";

export default DS.Model.extend({
    @attr('string') title: null,
    @attr('string') description: null,
    @attr('string') shortDescription: null,
});
