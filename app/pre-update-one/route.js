import Route from '@ember/routing/route';
export default Route.extend({
  model() {
    if (!this.controller || !this.controller.get('model')) {
      return this.store.query('pokemon',
        'preUpdate1').then((episodes) => {
        return episodes;
      });
    }
  }
});
