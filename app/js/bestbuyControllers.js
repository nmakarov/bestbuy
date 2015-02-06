'use strict';

var ModalInstanceCtrl = function ($scope, $modalInstance, product) {
  $scope.product = product;

  $scope.close = function () {
    $modalInstance.close();    
  };
};


angular.module('bb.controllers', [])

  .controller('bbCategoriesCtrl', ['$scope', '$rootScope', 'CategoriesService', function ($scope, $rootScope, CategoriesService) {
    CategoriesService.getCats().then(function(data) {
      $scope.categories = data;
    });
    $scope.active = -1;
    $scope.clicked = function (cid) {
      $rootScope.$emit('cid', cid);
      $scope.active = cid;
    };
  }])

  .controller('bbProductsCtrl', ['$scope', '$rootScope', '$modal', 'Products', function ($scope, $rootScope, $modal, Products) {
    $scope.products = Products.get({id: 'departments'});
    $rootScope.$on('cid', function (event, cid) {
      $scope.products = Products.get({id: cid});
    });

    $scope.productClicked = function (product) {
      $rootScope.$emit('productClicked', product);
    };
  }])

  .controller('bbPopupCtrl', ['$scope', '$rootScope', '$modal', function ($scope, $rootScope, $modal) {

    $scope.product = {name: ''};

    $scope.open = function () {
      var modalInstance = $modal.open({
        templateUrl: 'app/partials/popup.html',
        controller: ModalInstanceCtrl,
        resolve: {
          product: function () {
            return $scope.product;
          }
        }
      });
    };

    $rootScope.$on('productClicked', function (event, product) {
      $scope.product = product;
      $scope.open();
    });

  }]);
