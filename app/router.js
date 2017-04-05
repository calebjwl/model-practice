import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact', { path: '/contacts' }, function() {
    this.route('new');
    this.route('edit', { path: '/:contact_id' });
  });
});

export default Router;
