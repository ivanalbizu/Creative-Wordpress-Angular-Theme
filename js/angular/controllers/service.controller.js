(function(){

    'use strict';

    angular.module('app')
        .controller('ServiceCtrl', ServiceCtrl);

        ServiceCtrl.$inject = ['PageFactory', 'ServiceFactory', 'activePlugin'];
        function ServiceCtrl (PageFactory, ServiceFactory, activePlugin) {
            var vm = this;

            vm.restApiActive    = activePlugin.rest_api;
            vm.acfActive        = activePlugin.acf;

            function getPost(template, type) {
                PageFactory.getPostData(type).then(function(dataResponse) {
                    for (var i = 0; i < dataResponse.data.length; i++) {
                        if (dataResponse.data[i].template == template) {
                            vm.posts = dataResponse.data[i];
                        }
                    }
                })
            }

            function getService(number) {
                ServiceFactory.getServiceData(number).then(function(dataResponse) {
                    vm.services = dataResponse.data;
                });
            }

            if (vm.restApiActive && vm.acfActive) {
                getService(4);
                getPost('template-service.php', 'pages');
            }

        };

})();
