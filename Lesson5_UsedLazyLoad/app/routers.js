myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/Home');
  $stateProvider
      .state('Home', {
        url: "/Home",
        templateUrl: "app/html/Home.html",
        data: { ptitle: 'Home '},
        controller: "aController",
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      name: 'myApp',
                      files: [
                        "app/controllers/aController.js",
                        "app/style/css/Home.css"
                      ]
                  })
                }]
        }
      })
      .state('Dashboard', {
        url: "/Dashboard",
        templateUrl: "app/html/Dashboard.html",
        data: { ptitle: 'Dashboard '},
        controller: "bController",
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      name: 'myApp',
                      files: [
                        "app/controllers/bController.js",
                        "app/style/css/Dashboard.css"
                      ]
                  })
                }]
        }
      })
      .state('Profile', {
        url: "/Profile",
        templateUrl: "app/html/Profile.html",
        data: { ptitle: 'Profile '},
        controller: "bController",
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      name: 'myApp',
                      files: [
                        "app/controllers/bController.js",
                        "app/style/css/Profile.css"
                      ]
                  })
                }]
        }
      })
      .state('Blog', {
        url: "/Blog",
        templateUrl: "app/html/Blog.html",
        data: { ptitle: 'Blog '},
        controller: "bController",
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      name: 'myApp',
                      files: [
                        "app/controllers/bController.js",
                        "app/style/css/Blog.css"
                      ]
                  })
                }]
        }
      })
});
