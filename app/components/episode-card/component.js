import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['row', 'mb-3', 'episode-card-wrapper', 'pt-3', 'pb-3'],
    classNameBindings: ['media.isMobile:ml-1', 'media.isMobile:mr-1']
});
