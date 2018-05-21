import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload = payload.items;
    let output = {};
    let data = [];
    let attributes = {};
    payload.forEach((episode) => {
      let record = {
        type: "episode"
      };
      attributes = {};
      record.id = episode.id;
      attributes.title = episode.title;
      attributes.url = episode.url;
      attributes.descriptionHtml = episode.content_html;
      attributes.summary = episode.summary;
      attributes.datePublished = Date.parse(episode.datePublished);
      record.attributes = attributes;
      data.push(record);
    });

    output.data = data;
    output.meta = {};
    return output;
  },
});
