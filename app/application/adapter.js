import DS from 'ember-data';
import config from 'model-practice/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.DS.host,
});
