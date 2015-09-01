'use strict';

describe('myApp view1', function() {
  var view1Ctrl, scope;
  beforeEach(module('myApp'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller, $rootScope) {
      //spec body
      scope= $rootScope.$new();
      view1Ctrl = $controller('View1Controller', {$scope: scope});
      expect(view1Ctrl).toBeDefined();
    }));

  });
});

