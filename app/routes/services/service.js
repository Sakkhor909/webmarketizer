import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ServicesServiceRoute extends Route {
  @service store;
  async model(params) {
    return this.store.findRecord('service', params.service_slug);
  }
}
