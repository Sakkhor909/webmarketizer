import Route from '@ember/routing/route';

export default class ServicesIndexRoute extends Route {
  async model() {
    let response = await fetch('/api/services.json');
    let parsed = await response.json();
    return parsed;
  }
}
