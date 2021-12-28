import Route from '@ember/routing/route';

export default class AboutRoute extends Route {
  model() {
    return ['hello', '2', 'about ?'];
  }
}
