import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AboutRoute extends Route {
  @service store;
  async model() {
    const data = await this.store.findAll('service');
    return data;
  }
}
