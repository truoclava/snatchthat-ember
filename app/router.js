import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index');
  this.route('login');
  this.route('dashboard', {path: '/'}); //authenticated root
  this.route('signup'); //unauthenticated root
  this.resource('users', function() {
    this.route('user', { path: '/:user_id'}, function() {
      this.resource('closets', function() {
        this.route('closet', { path: '/:closet_id'}, function() {
          this.resource('items', function() {
            this.route('item', { path: '/:item_id'});
          });
        });
      });
    });
  });

});

export default Router;
