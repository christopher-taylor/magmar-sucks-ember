import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('responsive-table/expanded-row', 'Integration | Component | responsive table/expanded row', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{responsive-table/expanded-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#responsive-table/expanded-row}}
      template block text
    {{/responsive-table/expanded-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
