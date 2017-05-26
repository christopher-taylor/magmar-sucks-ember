import Ember from 'ember';

export default Ember.Route.extend({
    cancelMemes: Ember.on('deactivate', function(){
    Ember.run.cancel(this.controllerFor('application').get('memeCallback'));
  })
});
