import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['row', 'mb-3', 'episode-card-wrapper'],
    classNameBindings: ['media.isMobile:ml-1', 'media.isMobile:mr-1']
});
