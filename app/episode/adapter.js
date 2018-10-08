import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  findAll(store, type, sinceToken, snapshotRecordArray) {
    return $.getJSON("https://cors.io/?https://magmarsucks.fireside.fm/json", function (result) {
        console.log(result);
        return result["items"];
      //response data are now in the result variable
    });
  },

});
