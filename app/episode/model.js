import DS from 'ember-data';
import { attr } from "ember-decorators/data";

export default DS.Model.extend({
    @attr('string') title: null,
    @attr('string') date: null,
    @attr('string') description: null,
    @attr('string') shownotes: null,
    @attr('string') imageSmall: null,
    @attr('string') imageMedium: null,
    @attr('string') imageLarge: null
});
