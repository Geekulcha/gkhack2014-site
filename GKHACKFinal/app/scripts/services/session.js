'use strict';

angular.module('gkhackfinalApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
