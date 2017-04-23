import Ember from 'ember';

export default Ember.Component.extend({
    expanded: true,
    actions: {
        toggleTableVisibility(){
            this.toggleProperty('expanded');
        }
    }
});
