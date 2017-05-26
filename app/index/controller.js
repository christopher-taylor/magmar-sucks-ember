import Ember from 'ember';

export default Ember.Controller.extend({
    moreEpisodes: true,
    
    actions:{
        fetchMorePages(){
            this.send('moreEpisodes');
        }
    }
});
