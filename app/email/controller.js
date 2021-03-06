import Controller from '@ember/controller';
import {
  computed
} from 'ember-decorators/object';

export default Controller.extend({
  @computed('address', 'subject', 'body')
  get sendDisabled() {
    return (!this.get('address') || !this.get('subject') || !this.get('body'));
  }
});
