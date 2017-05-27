import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('load-episode-trigger', 'Integration | Component | load episode trigger', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{load-episode-trigger}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#load-episode-trigger}}
      template block text
    {{/load-episode-trigger}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
