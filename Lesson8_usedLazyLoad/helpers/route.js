app.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider){
$urlRouterProvider.otherwise('/');
  $stateProvider
    .state( 'login',{
      url:'/login',
      templateUrl:'/views/login',
      controller:'loginController',
      requireAuth: false,
 	resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      name: 'myApp',
                      files: [
                       "helpers/controllers/loginController.js",
                       "helpers/styles/login.css"
                      ]
                  })
                }]
        }
    })
.state( 'main',{
      url:'/',
      templateUrl:'/views/main',
      controller:'mainController',
      requireAuth: false,
 	resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      name: 'myApp',
                      files: [
                       "helpers/controllers/mainController.js",
                       "helpers/services/sessionService.js",
                       "helpers/services/authenticateService.js",
                       "helpers/styles/main.css"
                      ]
                  })
                }]
        }
    })

.state('home',{
      url:'/home',
      templateUrl:'/views/home',
      controller:'homeController',
      requireAuth: false,
 resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      name: 'myApp',
                      files: [
                       "helpers/controllers/homeController.js",
                        "helpers/services/postService.js",
                        "helpers/styles/home.css"
                      ]
                  })
                }]
        }
    })
    .state('logout',{
      url:'/logout',
      templateUrl:'/views/logout',
      controller:'logoutController',
      requireAuth: true,
resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      name: 'myApp',
                      files: [
                       "helpers/controllers/logoutController.js",
                       "helpers/styles/logout.css"

                      ]
                  })
                }]
        }

    })
    .state('post',{
      url:'/post/:id',
      templateUrl:'/views/post',
      controller:'postController',
      requireAuth: true,
resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      name: 'myApp',
                      files: [
                       "helpers/controllers/postController.js",
                       "helpers/styles/post.css"

                      ]
                  })
                }]
        }



    });
}]);
