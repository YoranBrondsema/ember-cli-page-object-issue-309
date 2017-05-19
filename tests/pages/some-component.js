import { create, clickable } from 'ember-cli-page-object';

export default create({
  someAsyncAction: clickable('.button-some-action')
});
