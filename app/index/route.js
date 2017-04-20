import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    sleep(9999999999);
      if (!this.controller || !this.controller.get('model')) {
        return this.store.query('episode', {}).then((episodes) => {
          return episodes;
        });
      }
  }
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
