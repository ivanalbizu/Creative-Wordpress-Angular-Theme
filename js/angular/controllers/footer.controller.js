(function(){

    'use strict';

    angular.module('app')
        .controller('FooterCtrl', FooterCtrl);

        FooterCtrl.$inject = ['PageFactory', '$sce', 'activePlugin'];
        function FooterCtrl (PageFactory, $sce, activePlugin) {
            var vm = this;

            vm.restApiActive    = activePlugin.rest_api;
            vm.acfActive        = activePlugin.acf;

            function getPost(template, type) {
                PageFactory.getPostData(type).then(function(dataResponse) {
                    for (var i = 0; i < dataResponse.data.length; i++) {
                        if (dataResponse.data[i].template == template) {
                            if (template == 'template-contact.php') {
                                vm.contact = dataResponse.data[i];
                                vm.contact.fields.contact_map = $sce.trustAsResourceUrl(vm.contact.fields.contact_map);
                            } else {
                                vm.posts = dataResponse.data[i];
                            }
                        }
                    }
                })
            }

            if (vm.restApiActive && vm.acfActive) {
                getPost('template-footer.php', 'pages');
                getPost('template-contact.php', 'pages');
            }

        };

})();
