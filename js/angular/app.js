(function(){

    'use strict';

    angular.module('app', [
            'ngRoute',
            'ngSanitize'
        ])
        .config(config)
        .constant('URL_API', {
            BASE_URL: localized.site_url + '/wp-json/wp/v2'
        })
        .value('activePlugin', {
            'rest_api': localized.state_plugin_rest_api,
            'acf': localized.state_plugin_acf
        })
        .run(run);

        function run($rootScope, $location) {
            var path = function() { return $location.path(); };
            $rootScope.$watch(path, function(newVal, oldVal){
                $rootScope.activetab = newVal;
            });
            $rootScope.selectedCategory = 'all';
        }

        function config($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: localized.views + 'home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })
            .when('/about', {
                templateUrl: localized.views + 'about.html',
                controller: 'AboutCtrl',
                controllerAs: 'vm'
            })
            .when('/services', {
                templateUrl: localized.views + 'services.html',
                controller: 'ServiceCtrl',
                controllerAs: 'vm'
            })
            .when('/works', {
                templateUrl: localized.views + 'works.html',
                controller: 'ListWorkCtrl',
                controllerAs: 'vm'
            })
            .when('/contact', {
                templateUrl: localized.views + 'contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'vm'
            })
            .when('/works/:id', {
                templateUrl: localized.views + 'single-work.html',
                controller: 'SingleWorkCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
        };
})();
