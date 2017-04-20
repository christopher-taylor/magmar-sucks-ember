import Ember from 'ember';

export default Ember.Component.extend({
    expanded: true,
    claaNames: ['mb-2'],
    actions: {
        toggleTableVisibility(){
            this.toggleProperty('expanded');
        }
    }
});
