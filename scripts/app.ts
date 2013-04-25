/// <reference path="../def/angular/angular.d.ts" />

var app = ng.module("mainApp",[]);
app.directive("markdown",function(){
  return{
      restrict: 'E',
      link:function(scope,element,attrs) {

      }
  }
});