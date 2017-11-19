import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('episode');
  },

  setupController(controller, model) {
    this._super();
    controller.set('model', model);
    controller.send('loadMore');
  },
});
