import { A } from '@ember/array';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    if (!this.controller || !this.controller.get('model')) {
      let model = A([]);
      let tiers = ["SSS Tier", "Waifu Tier", "Discussable Tier", "Neat/Goofy Tier", "Marginally Interesting Tier", "Onetrickland", "Blandland", "ABSOLUTE ZERO", "Just An Animal Tier", "Literally & Figuratively Hitler"];
      return this.store.query('pokemon', 'pre-usm').then((episodes) => {
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
