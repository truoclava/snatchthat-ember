import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function() {
    this.route('user', { path: '/:user_id'});
  });
  this.route('closets', function() {
    this.route('closet', { path: '/:closet_id'});
  });
  this.route('items', function() {
    this.route('item', { path: '/:item_id'});
  });
  this.route('activities');
  this.route('searches', function() {
    this.route('search');
    this.route('show');
  });
});


export default Router;
