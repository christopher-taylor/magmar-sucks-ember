import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload = payload.items;
    let output = {};
    let data = [];
    let attributes = {};
    console.log(payload)
    payload.forEach((episode) => {
      let record = {
        type: "episode"
      };
      attributes = {};
      record.id = episode.id;
      attributes.title = episode.title;
      attributes.url = episode.url;

      // Massage the html description to remove the summary (if included), the link to the page the user is already on, and other misc links
      if(episode.content_html.startsWith(`<p>${episode.summary}</p>`)){
        episode.content_html = episode.content_html.replace(`<p>${episode.summary}</p>`, "");
      }
      episode.content_html = episode.content_html.replace(`<p>For more episodes and the full ranking list visit <a href="http://www.magmar.sucks" rel="nofollow">Magmar Sucks</a> on the web.</p>`, "");
      episode.content_html = episode.content_html.replace(`<p><a href="https://twitter.com/MagmarSucks" title="Twitter" rel="nofollow">Twitter</a> <a href="https://www.reddit.com/r/MagmarSucks/" title="Reddit" rel="nofollow">Reddit</a> <a href="https://www.facebook.com/MagmarSux/" rel="nofollow">Facebook</a></p>`, "")

      attributes.descriptionHtml = episode.content_html;
      attributes.summary = episode.summary;
      let date = new Date(episode.date_published);
      attributes.datePublished = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
      record.attributes = attributes;
      data.push(record);
    });

    output.data = data;
    output.meta = {};
    return output;
  },
});
