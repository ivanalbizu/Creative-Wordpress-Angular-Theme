(function(){

    'use strict';

    angular.module('app')
        .factory('ServiceFactory', ServiceFactory);

        ServiceFactory.$inject = ['$http', 'URL_API'];
        function ServiceFactory($http, URL_API) {

          return {
              getServiceData: getServiceData
          };

          function getServiceData(number) {
              var url = URL_API.BASE_URL + '/service?page=1&per_page=' + number;
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
