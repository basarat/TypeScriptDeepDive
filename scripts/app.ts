
/// <reference path="../def/angular/angular.d.ts" />
/// <reference path="../def/requirejs/require.d.ts" />

/// <amd-dependency path="angular"/>
/// <amd-dependency path="showdown"/>

// Alternate way for dependency for TS 9
//declare module "angular"{}
//declare module "showdown"{}
//import angular = module("angular");
//import showdown= module("showdown");

var angular = require("angular");
var showdown = require("showdown");

export var app = angular.module("mainApp",[],function(){});

app.directive("markdown",function(){
    var converter = new showdown.converter();
    return{
        restrict: 'E',
        link:function(scope,element,attrs) {
            var htmlText = converter.makeHtml($.trim(element.text()));
            element.html(htmlText);
        }
    }
});

app.directive("codeseg",function(){
    return{
        restrict: 'E',
        link:function(scope,element,attrs) {
            var htmlText = $.trim(element.text());
            element.html('<pre><code contenteditable>'+htmlText+'</code></pre>');
        }
    }
});

