angular.module('docsTabsExample', ['lejuslideshow'])
  .controller('TestController', ['$scope', function($scope) {
    $scope.mycallback = function(cur, x) {
      debugger;
    };
  }]);