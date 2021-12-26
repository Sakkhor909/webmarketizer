import Route from '@ember/routing/route';

export default class ServicesServiceRoute extends Route {
  model(params) {
    const { service_slug } = params;
    return service_slug;
  }
}
