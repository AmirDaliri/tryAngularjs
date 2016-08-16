myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/pageA');
  $stateProvider
  .state('pageA', {
    url: "/pageA",
    templateUrl: "app/views/pageA.html",
    data: { ptitle: 'pageA '},
    controller: "cnotrollerA",
    resolve: {
      deps: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name: 'myApp',
          files: [
            "app/controllers/cnotrollerA.js",
            "app/style/css/a.css"
          ]
        })
      }]
    }
  })
  .state('pageB', {
    url: "/pageB/:myParentText",
    templateUrl: "app/views/pageB.html",
    data: { ptitle: 'pageB '},
    controller: function($scope, $stateParams) {$scope.MyhText = $stateParams.myParentText;},
    resolve: {
      deps: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name: 'myApp',
            files: [
              "app/controllers/cnotrollerB.js",
              "app/style/css/b.css"
            ]
          })
        }]
      }
    })
});
