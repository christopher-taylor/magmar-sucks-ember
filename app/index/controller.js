import Controller from '@ember/controller';
import {A} from '@ember/array';
import {
  action,
  computed
} from 'ember-decorators/object';

export default Controller.extend({
  // Infinite scroll fields.
  page: 0,
  size: 5,
  moreEpisodes: true,
  modelToRender: A(),

  @action
  loadMore() {
    console.log('loading more episode')
    // Early return if we're already at the end.
    if(!this.get('moreEpisodes')){
      return;
    }
    let size = this.get('size');
    let model = this.get('model');
    let startIndex = this.get('page') * size;
    let stopIndex = startIndex + size;

    // Prevent out of bounds exception.
    if (stopIndex > model.length - 1){
      stopIndex = model.length - 1;
      this.set(moreEpisodes, false);
    }

    let newEpisodes = model.slice(startIndex, stopIndex);
    let modelToRender = this.get('modelToRender');
    newEpisodes.forEach((episode) => {
      modelToRender.addObject(episode);
    });
    this.set('page', this.get('page') + 1);
  }
});
