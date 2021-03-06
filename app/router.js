import EmberRouter from '@ember/routing/router';
import config from 'web-marketizer/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('services', function () {
    this.route('service', { path: '/:service_slug' });
  });
  this.route('not-found', { path: '/*path' });
  this.route('reviews');
  this.route('clients');
  this.route('about');
  this.route('contact');
  this.route('privacy-policy');
  this.route('terms-and-conditions');
});
