import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('expand-collapse-chevron', 'Integration | Component | expand collapse chevron', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{expand-collapse-chevron}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#expand-collapse-chevron}}
      template block text
    {{/expand-collapse-chevron}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
