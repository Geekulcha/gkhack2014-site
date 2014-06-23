'use strict';

var app = angular.module('gkhackfinalApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'linkify',
  'ui.bootstrap',
  'firebase',
  // 'ngAnimate',
  'angular-google-analytics'
])
.constant('FIREBASE_URL', 'https://blinding-fire-5281.firebaseio.com/');

app.config(function ($routeProvider, $locationProvider, $httpProvider, AnalyticsProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      // .when('/login', {
      //   templateUrl: 'partials/login',
      //   controller: 'LoginCtrl'
      // })
      // .when('/signup', {
      //   templateUrl: 'partials/signup',
      //   controller: 'SignupCtrl'
      // })
      // .when('/settings', {
      //   templateUrl: 'partials/settings',
      //   controller: 'SettingsCtrl',
      //   authenticate: true
      // })
      .when('/register', {
        templateUrl: 'partials/register',
        controller: 'TwitterController',
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    AnalyticsProvider.setAccount('UA-52169473-1');
    AnalyticsProvider.trackPages(true);
    AnalyticsProvider.setDomainName('none');
    AnalyticsProvider.trackPrefix('GKHack14');
    AnalyticsProvider.useAnalytics(true);
    AnalyticsProvider.ignoreFirstPageLoad(true);
    AnalyticsProvider.useECommerce(true);
    AnalyticsProvider.useEnhancedLinkAttribution(true);
    AnalyticsProvider.setExperimentId('12345');
    AnalyticsProvider.setCookieConfig({
      cookieDomain: 'hackathon.geekulcha.com',
      cookieName: 'gkhack14',
      cookieExpires: 20000
    });

    // change page event name
    AnalyticsProvider.setPageEvent('$stateChangeSuccess');

    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {

      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  });
