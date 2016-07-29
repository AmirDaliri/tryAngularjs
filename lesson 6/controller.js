var app=angular.module('lesson6',[]);
app.directive('businessHeading',function(){
  return{
    restrict:'AE',
      template:'<div><h1>Business Page</h1></div>'  };
});
app.directive('bt­tooltip',function(){
  return{
    link: function(scop,element,attributes){
      $element.attr("title",attributes.bttooltip + '!!!');
      $element.attr("data-toggle","tooltip");
      $element.attr('data-placement',"bottom");
    }
  };
});
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});
app.controller('controller',function($scope){
  $scope.users=[
    {fullName:'Amir Daliri',age:'27'},
    {fullName:'Behnaz Zari',age:'27'},
    {fullName:'Danial vahdat',age:'22'},
    {fullName:'Elahe Bahari',age:'26'}];
  });
