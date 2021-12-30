import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContactController extends Controller {
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
