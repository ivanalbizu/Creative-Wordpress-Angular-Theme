(function(){

    'use strict';

    angular.module('app')
        .factory('WorkFactory', WorkFactory);

        WorkFactory.$inject = ['$http', 'URL_API'];
        function WorkFactory($http, URL_API) {

          return {
              getPostData: getPostData,
              getSinglePostData: getSinglePostData,
              getCategoryData: getCategoryData
          };

          function getPostData() {
              var url = URL_API.BASE_URL + '/works?filter[posts_per_page]=-1';

              return $http.get(url, {cache : true})
                  .then(successCallback, errorCallback);
          }

          function getSinglePostData(id) {
              var url = URL_API.BASE_URL + '/works/';
              return $http.get(url + id, {cache: 'true'})
                  .then(successCallback, errorCallback);
          };

          function getCategoryData() {
              var url = URL_API.BASE_URL + '/works_category';

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
