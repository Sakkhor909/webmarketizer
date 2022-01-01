import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContactComponent extends Component {
  @tracked user = {
    name: '',
    email: '',
    massage: '',
  };
  @action
  submitContact() {
    alert(
      `Name is ${this.user.name} , Email is  ${this.user.email}, massage is ${this.user.massage}`
    );
  }
}
