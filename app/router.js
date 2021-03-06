import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('results', {path: 'results/:food'});
  this.route('about');
  this.route('admin');
  this.route('signup');
  this.route('weather', {path: 'weather/:location'});
  this.route('details', {path: 'details/:food'} );
  this.route('contact');
});

export default Router;
