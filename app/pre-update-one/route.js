import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    if (!this.controller || !this.controller.get('model')) {
      return this.store.query('pokemon',
        'preUpdate1').then((episodes) => {
        return episodes;
      });
    }
  }
});
