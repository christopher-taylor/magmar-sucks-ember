import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    if (!this.controller || !this.controller.get('model')) {
      return this.store.query('episode', {}).then((episodes) => {
        return episodes;
      })
    }
  }
});
