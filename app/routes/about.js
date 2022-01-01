import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

const data = [
  {
    id: '1',
    attributes: {
      ServiceName: 'Graphic Design Service',
      content:
        'content from route Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis...',
      image: './assets/images/graphic_design_single.gif',
    },
  },
];

export default class AboutRoute extends Route {
  @service store;
  async model() {
    // const data = await this.store.findAll('service');
    return data;
  }
}
