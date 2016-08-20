app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/FormPage');
  $stateProvider
    .state('FormPage', {
      url: "/FormPage",
      templateUrl: "app/html/FormPage.html",
      data: { ptitle: 'FormPage '},
      controller: "FormPageCtrl",
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load({
          name: 'myApp',
          files: [
            "app/controller/FormPageCtrl.js",
            "app/css/Form.css"
            ]
          })
        }]
      }
   })
});
