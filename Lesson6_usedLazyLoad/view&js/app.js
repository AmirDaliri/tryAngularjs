var myApp  = angular.module('myApp' ,["ui.router", "oc.lazyLoad"]);
myApp.directive('businessHeading',function(){
  return{
    restrict:'AE',
      template:'<div><h1>Business Page</h1></div>'  };
});
myApp.directive('btTooltip',function($compile){
  return{
    restrict:'A',
    replace:'true',
    scope:{btTooltip:'@'},
    link:function(scope,elem,attrs){
      elem.attr("data-toggle","tooltip");
      elem.attr('data-placement',"bottom");
      var a="\""+attrs.btTooltip+"!!!"+"\"";
      elem.attr("title",a);
          }}
      $compile(elem)(scope);
    });
