import DS from 'ember-data';
import {
  htmlSafe
} from '@ember/string';

const CONVERTER = new showdown.Converter();


export default DS.JSONAPISerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    console.log(payload)
    let output = {};
    let data = [];
    payload.forEach((episode) => {
      if (episode.published) {
        data.push(this.createRecord(episode));
      }
    });
    output.data = data;
    output.meta = {};
    return output;
  },

  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    let output = {};
    output.data = this.createRecord(payload);
    output.meta = {};
    return output;
  },

  createRecord(episode) {
    let record = {};
    let attributes = {};

    record.type = 'episode';
    attributes.title = episode.title;
    attributes.description = htmlSafe(CONVERTER.makeHtml(episode.long_description));
    attributes.shortDescription = episode.description;

    let urlParts = episode.sharing_url.split('/');
    record.id = urlParts[urlParts.length - 1];

    let fullDateString = episode.published_at;
    let dateString = fullDateString.split('T')[0];
    let dateArray = dateString.split('-');
    let date = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
    record.attributes = attributes;
    return record;
  }
});
