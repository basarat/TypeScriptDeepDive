/// <amd-dependency path="angular"/>
/// <amd-dependency path="showdown"/>

/// <reference path="../def/angular/angular.d.ts" />
/// <reference path="../def/requirejs/require.d.ts" />

var angular = require("angular");
var Showdown = require("showdown");

export var app = angular.module("mainApp",[],function(){});
app.directive("markdown",function(){
    var converter = new Showdown.converter();
    return{
        restrict: 'E',
        link:function(scope,element,attrs) {
            var htmlText = converter.makeHtml(element.text());
            element.html(htmlText);
        }
    }
});