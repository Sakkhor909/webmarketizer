import Model, { attr } from '@ember-data/model';

export default class ServiceModel extends Model {
  @attr id;
  @attr icon;
  @attr name;
}
