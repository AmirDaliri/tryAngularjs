var app=angular.module('lesson5',['ui.router']);
app.config(function($stateProvider){
	$stateProvider.state('Index',{
		url:"Index",
		templateUrl:"Index.html",
		controller:"navigationController"})
		.state('Dashboard',{
			url:"Dashboard",
			templateUrl:"Dashboard.html"})
			.state('Blog',{
				url:"Blog",
				templateUrl:"Blog.html"})
				.state('Profile',{
					url:"Profile",
					templateUrl:"Profile.html"})
				});
app.controller('controller',function($scope){});
