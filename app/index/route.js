import Ember from 'ember';

const EPISODES = [70674, 70488, 70323, 70184, 70124, 69734, 69568, 69440, 69281, 69190, 68842, 68636, 68294, 67479, 67478, 67477, 67463, 67063, 66658, 66352, 66258, 65035, 64639, 63947, 63531, 63450, 63316, 62590, 62423, 62158, 61924, 61608, 61429, 61310, 61221, 61103, 60956, 60743, 60705, 60297, 59827, 59817, 59813, 59559, 59476, 59297, 59122, 58642, 58523, 58216, 58106, 58240, 57935, 57934, 57933, 57932, 57931, 57930, 57929, 57928, 57927, 57926, 57925, 57924, 57923, 57922, 57921, 57920, 57919, 57918, 57917, 57916, 57915, 57914, 57913, 57912, 57911, 57910, 57909, 57908, 57907, 57906, 57905, 57904, 57903, 57902, 57901, 57900, 57899, 57898, 57897, 57896, 57895, 57894, 57893, 57892, 57891, 57890, 57889, 57888, 57887, 57886, 57885, 57884, 57883, 57882, 57881, 57880, 57879, 57878, 57877, 57876, 57875, 57874, 57873, 57872, 57871, 57870, 57869, 57868, 57867, 57866, 57865, 57864, 57863, 57862, 57861, 57860, 57859, 57858, 57857, 57856, 57855, 57854, 57853, 57852, 57851, 57850, 57849, 57848, 57847, 57846, 57845, 57844, 57843, 57842, 57841, 57840, 57839, 57838, 57837, 57836, 57835, 57834, 57833, 57832, 57831, 57830, 57829, 57828, 57827, 57826, 57825, 57824, 57823, 57822, 57821, 57820, 57819, 57818, 57817, 57816, 57815, 57814, 57813, 57812, 57811, 57810, 57809, 57808, 57807, 57806, 57805, 57804];
const SIZE = 10;

export default Ember.Route.extend({
  lastPage: 0,

  model() {
    return Ember.A(this.fetchEpisodes());
  },
  fetchEpisodes() {
    let lastPage = this.get('lastPage');
    let start = lastPage * SIZE;
    let end = Math.min(start + SIZE, EPISODES.length - 1);
    let episodesToFetch = EPISODES.slice(start, end);
    let fetchedEpisodes = [];
    let output = [];

    // Let the controller know there aren't more episodes to load
    if (end === EPISODES.length -1){
      this.controllerFor('index').set('moreEpisodes', false);
    }
    this.set('lastPage', lastPage + 1);

    // Create an array of episode promises.
    episodesToFetch.forEach((episodeId) => {
      fetchedEpisodes.push(this.store.findRecord('episode', episodeId));
    });

    // When all promises are resolved, build and return the output.
    return Ember.RSVP.allSettled(fetchedEpisodes).then((value)=>{
      value.forEach((resolvedEpisode)=>{
        output.push(resolvedEpisode.value);
      });
      return output;
    });
  },

  actions: {
    moreEpisodes() {
      let model = this.controllerFor('index').get('model');
      let newEpisodes = this.fetchEpisodes().then((results)=>{
        results.forEach((episode) => {
          model.pushObject(episode);
        });
      });
    }
  }
});
