import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType){
        let output = {};
        let data = [];
        payload.forEach((episode) => {
            if(episode.published){
                data.push(this.createRecord(episode));
            }
        });
        output.data = data;
        output.meta = {};
        return output;
    },

    normalizeSingleResponse (store, primaryModelClass, payload, id, requestType){
        let output = {};
        output.data = this.createRecord(payload);
        output.meta = {};
        return output;
    },

    createRecord(episode){
        let record = {};
        let attributes = {};
        let fullDateString = episode.published_at;
        let dateString = fullDateString.split('T')[0];
        let dateArray = dateString.split('-');
        let date = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
        record.id = episode.id.toString();
        record.type = 'episode';
        attributes.title = episode.title;
        attributes.date = date;
        attributes.description = episode.description;
        attributes.shownotes = episode.long_description;
        attributes.imageSmall = episode.images.thumb;
        attributes.imageMedium = episode.images.small;
        attributes.imageLarge = episode.images.large;
        record.attributes = attributes;
        return record;
    }
});
