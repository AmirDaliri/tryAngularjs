myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
  .state('home', {
    url: "/home",
    templateUrl: "view&js/html/home.html",
    data: { ptitle: 'home'},
  controller: "controller",
  resolve: {
    deps: ['$ocLazyLoad', function($ocLazyLoad) {
      return $ocLazyLoad.load({
        name: 'myApp',
        files: [
          "view&js/controller/FormCtrl.js",
          "view&js/style/css/stylesheet.css"
        ]
      })
    }]
  }})
});
