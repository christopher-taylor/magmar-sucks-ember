import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['page', 'size'],
    page: 1,
    size: 10,
    moreEpisodes: true,

    modelChanged: Ember.observer('model', function(){
        this.sliceModel();
    }),
    pageChanged: Ember.observer('page', function(){
        this.sliceModel();
    }),

    init(){
        this.set('page', 1);
        this._super(...arguments);
    },

    sliceModel(){
        var model = this.get('model').toArray();
        var page = this.get('page');
        var size = this.get('size');
        var startSlice = ((page - 1) * size);
        startSlice = (startSlice !== 0) ? startSlice - 1 : startSlice;
        var endSlice = startSlice + size;
        var slice = model.slice(0, endSlice);
        this.set('activeModel', Ember.A(slice));
        this.set('moreEpisodes', (endSlice <= model.length));
    },

    actions:{
        fetchMorePages(){
            this.set('page', this.get('page') + 1);
        }
    }
});
