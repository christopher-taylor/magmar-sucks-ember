import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        collapse(target){
            Ember.$(`[data-table-header='${target}']`).toggle();
            Ember.$(`[data-collapse-target='${target}']`).collapse('toggle').then(()=>{
            });
        }
    }
});
