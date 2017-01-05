(function(){

    'use strict';

    angular.module('app')
        .factory('AboutFactory', AboutFactory);

        AboutFactory.$inject = ['$http', 'URL_API'];
        function AboutFactory($http, URL_API) {

          return {
              getTeamData: getTeamData
          };

          function getTeamData(number) {
              var url = URL_API.BASE_URL + '/about?page=1&per_page=' + number;
              return $http.get(url, {cache : true})
                  .then(successCallback, errorCallback);
          }

          function successCallback(response) {
            return response;
          }
          function errorCallback(error) {
            console.log(error);
          }

        };

})();
