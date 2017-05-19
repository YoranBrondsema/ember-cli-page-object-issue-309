import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import page from '../../../pages/some-component';
import wait from 'ember-test-helpers/wait';

moduleForComponent('some-component', 'Integration | Component | some component', {
  integration: true,
  beforeEach() {
    page.setContext(this);

    // Uncomment to make the test pass
    // window.wait = wait;
  },
  afterEach() {
    page.removeContext();
  }
});

test('it renders', async function(assert) {
  this.render(hbs`{{some-component}}`);

  await page.someAsyncAction();
  assert.ok(true);
});
