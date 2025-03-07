'use strict';

describe('Controller: PortfolioTodoCtrl', function () {

  // load the controller's module
  beforeEach(module('myPageApp'));

  var PortfolioTodoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortfolioTodoCtrl = $controller('PortfolioTodoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
