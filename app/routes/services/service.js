import Route from '@ember/routing/route';

export default class ServicesServiceRoute extends Route {
  async model(params) {
    const { service_slug } = params;

    let response = await fetch(`/api/${service_slug}.json`).catch((error) => {
      console.log(
        `There is an error with single service data fetching ${error}`
      );
    });

    let parsed = await response.json();

    return parsed.data;
  }
}
