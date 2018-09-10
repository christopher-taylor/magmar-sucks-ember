import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    findAll(store, type, sinceToken, snapshotRecordArray) {
        return $.getJSON("https://magmarsucks.fireside.fm/json", function (result) {
          //response data are now in the result variable
          return result['items'];
        });;
    }
});
