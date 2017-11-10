import Component from '@ember/component';

export default Component.extend({
    expanded: true,
    actions: {
        toggleTableVisibility(){
            this.toggleProperty('expanded');
        }
    }
});
