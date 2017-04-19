import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    if (!this.controller ||
      !this.controller.get('model')) {
      let model = Ember.A([]);;
      return this.store.query('pokemon',
        'preUpdate1').then((episodes) => {
        return episodes;
      });
    }
  }
});
