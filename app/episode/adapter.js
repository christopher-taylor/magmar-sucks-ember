import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    findAll(store, type, sinceToken, snapshotRecordArray) {
        return $.ajax({
            url: "/data/feed.json",
            type: 'GET',
            success: function (data) {
                console.log(data);
                return data;
                //process the JSON data etc
            },
            
        });
    },
    
    urlForQuery() {
        return `/data/feed.json`;
    }
});
