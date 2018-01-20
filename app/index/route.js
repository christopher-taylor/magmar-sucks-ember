import { A } from '@ember/array';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    if (!this.controller || !this.controller.get('model')) {
      let model = A([]);
      let tiers = ["Extreme Interest & Flavor", "Extreme Interest or Flavor", "Interesting and Great Flavor", "Interesting or Some Flavor", "Interesting", "Somewhat Interesting", "Marginally Interesting", "Barely Noteworthy", "Boring", "Boring & Actively Bad"];
      return this.store.query('pokemon', 'ranking').then((episodes) => {
        let pokemon = A(episodes);
        tiers.forEach((tier, index) => {
          model.push({
            name: tier,
            pokemon: pokemon.filterBy('tier', index)
          });
        });
        return model;
      });
    }
  }
});
