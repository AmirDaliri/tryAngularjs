var app=angular.module('myApp',[]);
// app.directive('businessHeading',function(){
//   return{
//     restrict:'AE',
//       template:'<div><h1>Business Page</h1></div>'  };
// });
// app.directive('btTooltip',function($compile){
//   return{
//     restrict:'A',
//     replace:'true',
//     scope:{btTooltip:'@'},
//     link:function(scope,elem,attrs){
//       elem.attr("data-toggle","tooltip");
//       elem.attr('data-placement',"bottom");
//       var a="\""+attrs.btTooltip+"!!!"+"\"";
//       elem.attr("title",a);
//           }}
//       $compile(elem)(scope);
//     });
app.controller('controller',function($scope){
  $scope.users=[
    {fullName:'Amir Daliri',age:'27'},
    {fullName:'Behnaz Zari',age:'27'},
    {fullName:'Danial vahdat',age:'22'},
    {fullName:'Elahe Bahari',age:'26'}];
  });
