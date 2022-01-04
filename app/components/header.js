import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class HeaderComponent extends Component {
  @tracked Massage = 'Welcome';
  @action
  ShowMassage(data) {
    this.Massage = data;
  }
  @tracked showingModal = false;

  @action
  showModal() {
    if (this.showingModal) {
      this.showingModal = false;
    } else {
      this.showingModal = true;
    }
  }

  @action
  hideModal() {
    this.showingModal = false;
  }
}
