import DS from 'ember-data';
import { attr } from "ember-decorators/data";

export default DS.Model.extend({
  @attr('string') name: null,
  @attr('string') description: null,
  @attr('string') tier: null,
  @attr('string') episodeDetails: null
});
