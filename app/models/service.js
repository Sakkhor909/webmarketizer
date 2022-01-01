import Model, { attr } from '@ember-data/model';

export default class ServicesModel extends Model {
  @attr ServiceName;
  @attr content;
  @attr image;
  @attr link;
}
