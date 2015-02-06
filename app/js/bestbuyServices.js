'use strict';

angular.module('bb.services', ['ngResource'])

  .value('version', '0.1')

  .factory('CategoriesService', ['$http', function ($http) {
    return {
      getCats: function () {
        return $http.get('http://www.bestbuy.ca/api/v2/json/category/Departments')
          .then(function(result) {
            return result.data;
          });
      }
    };
  }])

  .factory('Products', ['$resource', function ($resource) {
    var endPoint = 'http://www.bestbuy.ca/api/v2/json/search?categoryid=';
    return $resource(endPoint + ':id', {}, {
      query: {method: 'GET', params: {}, isArray:false}
    });
  }]);