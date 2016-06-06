import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularfire from 'angularfire';
import firebase from 'firebase';

import routing from './home.routes';
import HomeController from './home.controller';

export default angular.module('app.home', [uirouter, angularfire])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;