import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType){
        let output = {};
        let data = [];
        let record = {};
        let attributes = {}
        payload.forEach((episode) => {
            if(episode.published){
                record = {};
                attributes = {};
                let fullDateString = episode.published_at;
                let dateString = fullDateString.split('T')[0];
                let dateArray = dateString.split('-');
                let date = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
                record.id = episode.id;
                record.type = 'episode';
                attributes.title = episode.title;
                attributes.date = date;
                attributes.description = episode.description;
                attributes.shownotes = episode.long_description;
                attributes.imageSmall = episode.images.thumb;
                attributes.imageMedium = episode.images.medium;
                attributes.imageLarge = episode.images.large;
                record.attributes = attributes;
                data.push(record);
            }
        });
        output.data = data;
        output.meta = {};
        return output;
    }
});
