import Controller from '@ember/controller';

export default Controller.extend({
    moreEpisodes: true,
    
    actions:{
        fetchMorePages(){
            this.send('moreEpisodes');
        }
    }
});
