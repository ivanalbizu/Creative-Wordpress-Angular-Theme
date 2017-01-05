(function(){

    'use strict';

    angular.module('app')
        .controller('HomeCtrl', HomeCtrl);

        HomeCtrl.$inject = ['ServiceFactory', 'WorkFactory', 'activePlugin'];
        function HomeCtrl (ServiceFactory, WorkFactory, activePlugin) {

            var vm = this;

            vm.restApiActive    = activePlugin.rest_api;
            vm.acfActive        = activePlugin.acf;

            vm.chooseCategory   = chooseCategory;
            vm.selectedCategory = 'all';

            function chooseCategory(term_id) {
                vm.selectedCategory = term_id;
            }

            function getCategory() {
                WorkFactory.getCategoryData().then(function(dataResponse) {
                    vm.terms = dataResponse.data;
                });
            }

            function getPosts() {
                WorkFactory.getPostData().then(function(dataResponse) {
                    vm.posts = dataResponse.data;
                })
            }

            function getService(number) {
                ServiceFactory.getServiceData(number).then(function(dataResponse) {
                    vm.services = dataResponse.data;
                    console.log(vm.services);
                });
            }

            if (vm.restApiActive && vm.acfActive) {
                getCategory();
                getPosts();
                getService(4);
            }

        };

})();
