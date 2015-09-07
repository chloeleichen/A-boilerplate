'use strict';

describe('myApp view2', function() {
  beforeEach(module('myApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('view2', function() {
    var $scope, controller;

    beforeEach(function(){
      $scope = {};
      controller = $controller('View2Controller', {$scope: $scope});
    });
  });
});
