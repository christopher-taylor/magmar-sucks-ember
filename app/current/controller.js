import $ from 'jquery';
import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        collapse(target){
            $(`[data-table-header='${target}']`).toggle();
            $(`[data-collapse-target='${target}']`).collapse('toggle').then(()=>{
            });
        }
    }
});
