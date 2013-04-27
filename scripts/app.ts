/// <amd-dependency path="angular"/>

/// <reference path="../def/angular/angular.d.ts" />
/// <reference path="../def/requirejs/require.d.ts" />

var angular = require("angular");

export var app = angular.module("mainApp",[],function(){});
app.directive("markdown",function(){
    return{
        restrict: 'E',
        link:function(scope,element,attrs) {
            element.html("asdf");
        }
    }
});