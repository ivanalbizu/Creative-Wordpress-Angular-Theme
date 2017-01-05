(function(){

    'use strict';

    angular.module('app')
        .controller('ContactCtrl', ContactCtrl);

        ContactCtrl.$inject = ['PageFactory', '$sce', 'activePlugin'];
        function ContactCtrl (PageFactory, $sce, activePlugin) {
            var vm = this;

            vm.restApiActive    = activePlugin.rest_api;
            vm.acfActive        = activePlugin.acf;

            function getPost(template, type) {
                PageFactory.getPostData(type).then(function(dataResponse) {
                    for (var i = 0; i < dataResponse.data.length; i++) {
                        if (dataResponse.data[i].template == template) {
                            vm.posts = dataResponse.data[i];
                            vm.posts.fields.contact_map = $sce.trustAsResourceUrl(vm.posts.fields.contact_map);
                        }
                    }
                })
            }

            if (vm.restApiActive && vm.acfActive) {
                getPost('template-contact.php', 'pages');
            }

        };

})();
