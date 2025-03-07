'use strict';

describe('Controller: AboutMeCtrl', function () {

  // load the controller's module
  beforeEach(module('myPageApp'));

  var AboutMeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
      AboutMeCtrl = $controller('AboutMeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
