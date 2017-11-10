import { cancel } from '@ember/runloop';
import { on } from '@ember/object/evented';
import Route from '@ember/routing/route';

export default Route.extend({
    cancelMemes: on('deactivate', function(){
    cancel(this.controllerFor('application').get('memeCallback'));
  })
});
