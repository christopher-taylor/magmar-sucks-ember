import DS from 'ember-data';
import { attr } from "ember-decorators/data";

export default DS.Model.extend({
  @attr('string') title: null,
  @attr('string') url: null,
  @attr('string') descriptionHtml: null,
  @attr('string') summary: null,
  @attr('string') datePublished: null
});
