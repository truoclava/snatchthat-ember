import { moduleForModel, test } from 'ember-qunit';

moduleForModel('searches/search', 'Unit | Model | searches/search', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
