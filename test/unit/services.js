'use strict';

/* globals describe, it, beforeEach, expect, module, inject */

describe('service', function() {
  var $httpBackend;
  var scope;
  var categoriesService;
  var categoriesCtrl;

  beforeEach(function () {

    module('bb.services');
    module('bb.controllers');

    inject(function($injector, $controller, _$httpBackend_, $rootScope) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://www.bestbuy.ca/api/v2/json/category/Departments').respond(

      {
      Brand: "BestBuyCanada",
      productCount: 58731,
      id: "Departments",
      parentCategories: [ ],
      name: "Departments",
      subCategories: [
      {
      id: "20001",
      name: "Computers & Tablets",
      hasSubcategories: true,
      productCount: 6119
      },
      {
      id: "20003",
      name: "TV & Home Theatre",
      hasSubcategories: true,
      productCount: 1492
      },
      {
      id: "26515",
      name: "iPod, Headphones & Portable Audio",
      hasSubcategories: true,
      productCount: 1247
      },
      {
      id: "20006",
      name: "Best Buy Mobile",
      hasSubcategories: true,
      productCount: 2848
      },
      {
      id: "20005",
      name: "Cameras & Camcorders",
      hasSubcategories: true,
      productCount: 1439
      },
      {
      id: "20004",
      name: "GPS, Car Audio & Satellite Radio",
      hasSubcategories: true,
      productCount: 380
      },
      {
      id: "20002",
      name: "Movies & Music",
      hasSubcategories: true,
      productCount: 13623
      },
      {
      id: "20343",
      name: "Musical Instruments",
      hasSubcategories: true,
      productCount: 982
      },
      {
      id: "26516",
      name: "Video Games",
      hasSubcategories: true,
      productCount: 3260
      },
      {
      id: "30957",
      name: "Office Supplies & Ink",
      hasSubcategories: true,
      productCount: 4421
      },
      {
      id: "26517",
      name: "Appliances",
      hasSubcategories: true,
      productCount: 994
      },
      {
      id: "homegardentools",
      name: "Home, Furniture & Kitchen",
      hasSubcategories: true,
      productCount: 7182
      },
      {
      id: "travelsportsoutdoors",
      name: "Toys, Sports & Recreation",
      hasSubcategories: true,
      productCount: 3454
      },
      {
      id: "20275",
      name: "Gift Cards",
      hasSubcategories: true,
      productCount: 11
      },
      {
      id: "22042a",
      name: "Geek Squad",
      hasSubcategories: true,
      productCount: 48
      },
      {
      id: "bbfb",
      name: "Best Buy for Business",
      hasSubcategories: true,
      productCount: 112
      },
      {
      id: "viva_main",
      name: "VIVA from Best Buy",
      hasSubcategories: true,
      productCount: 11119
      }
      ]
      }
      );
      scope = $rootScope.$new();
      categoriesCtrl = $controller('bbCategoriesCtrl', {$scope: scope});
      categoriesService = $injector.get('CategoriesService');
    });
  });

  it('should be defined', function () {
    expect(categoriesService).toBeDefined();
  });

  it("should access remote json", function () {
    expect(scope.categories).toBeUndefined();
    $httpBackend.flush();
    expect(scope.categories.subCategories.length).toEqual(17);
    expect(scope.categories.subCategories[1].id).toEqual('20003');
  });

});
