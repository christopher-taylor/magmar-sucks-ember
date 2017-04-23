import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    if (!this.controller || !this.controller.get('model')) {
      let model = Ember.A([]);
      let tiers = ["SSS Tier", "Waifu Tier", "Discussable Tier", "Neat/Goofy Tier", "Marginally Interesting Tier", "Onetrickland", "Blandland", "ABSOLUTE ZERO", "Just An Animal Tier", "Literally & Figuratively Hitler"];
      return this.store.query('pokemon', 'ranking').then((episodes) => {
        let pokemon = Ember.A(episodes);
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
