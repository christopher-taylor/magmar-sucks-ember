import $ from 'jquery';
import Controller from '@ember/controller';
import EmberArray from '@ember/array';

export default Controller.extend({
      // Infinite scroll fields.
      page: -1, // This is set to -1 because the controller calls load more which starts by incrementing this counter. This is very fixable but I'm not feeling it right now!
      size: 5,
      moreEpisodes: true,
      modelToRender: [],

      actions: {
        collapse(target) {
          $(`[data-table-header='${target}']`).toggle();
          $(`[data-collapse-target='${target}']`).collapse('toggle').then(() => {});
        },

        loadMore() {
          console.log('loading more episode')
          // Early return if we're already at the end.
          if (!this.get('moreEpisodes')) {
            return;
          }
          this.set('page', this.get('page') + 1);
          let size = this.get('size');
          let model = this.get('model');
          let startIndex = this.get('page') * size;
          let stopIndex = startIndex + size;

          // Prevent out of bounds exception.
          if (stopIndex > model.length - 1) {
            stopIndex = model.length - 1;
            this.set(moreEpisodes, false);
          }

          let newEpisodes = model.slice(startIndex, stopIndex);
          let modelToRender = this.get('modelToRender');
          newEpisodes.forEach((episode) => {
            modelToRender.addObject(episode);
          });
        }
      }
    });
