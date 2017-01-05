(function(){

    'use strict';

    angular.module('app')
        .controller('AboutCtrl', AboutCtrl);

        AboutCtrl.$inject = ['AboutFactory', 'PageFactory', 'activePlugin'];
        function AboutCtrl (AboutFactory, PageFactory, activePlugin) {
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

            function getTeams(number) {
                AboutFactory.getTeamData(number).then(function(dataResponse) {
                    vm.teams = dataResponse.data;
                })
            }

            if (vm.restApiActive && vm.acfActive) {
                getTeams(4);
                getPost('template-about.php', 'pages');
            }

        };

})();
