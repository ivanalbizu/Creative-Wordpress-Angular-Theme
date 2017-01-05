(function(){

    'use strict';

    angular.module('app')
        .factory('PageFactory', PageFactory);

        PageFactory.$inject = ['$http', 'URL_API'];
        function PageFactory($http, URL_API) {

          return {
              getPostData: getPostData
          };

          function getPostData(type) {
              var url = URL_API.BASE_URL + '/' + type;
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
