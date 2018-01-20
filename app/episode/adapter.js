import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  findAll(modelName, snapshot) {
    return $.ajax(`https://magmarsucks.fireside.fm/`);
  }
});
