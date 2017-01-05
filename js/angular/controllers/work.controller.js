(function(){

    'use strict';

    angular.module('app')
        .controller('ListWorkCtrl', ListWorkCtrl)
        .controller('SingleWorkCtrl', SingleWorkCtrl);

        ListWorkCtrl.$inject = ['PageFactory', 'WorkFactory', 'activePlugin'];
        function ListWorkCtrl (PageFactory, WorkFactory, activePlugin) {

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

            function getPost(template, type) {
                PageFactory.getPostData(type).then(function(dataResponse) {
                    for (var i = 0; i < dataResponse.data.length; i++) {
                        if (dataResponse.data[i].template == template) {
                            vm.item = dataResponse.data[i];
                        }
                    }
                })
            }

            function getPosts() {
                WorkFactory.getPostData().then(function(dataResponse) {
                    vm.posts = dataResponse.data;
                })
            }

            if (vm.restApiActive && vm.acfActive) {
                getCategory();
                getPosts();
                getPost('template-work.php', 'pages');
            }

        };

        SingleWorkCtrl.$inject = ['WorkFactory', '$routeParams', 'activePlugin'];
        function SingleWorkCtrl (WorkFactory, $routeParams, activePlugin) {

          var vm = this;

          vm.restApiActive    = activePlugin.rest_api;
          vm.acfActive        = activePlugin.acf;

          var id = $routeParams.id;

          function getPost(id) {
              WorkFactory.getSinglePostData(id).then(function(dataResponse) {
                  vm.item = dataResponse.data;
              });
          }

          if (vm.restApiActive && vm.acfActive) {
              getPost(id);
          }

        };

})();
