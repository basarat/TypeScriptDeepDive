define(["require", "exports", "angular", "showdown"], function(require, exports) {
    var angular = require("angular");
    var showdown = require("showdown");
    exports.app = angular.module("mainApp", [], function () {
    });
    exports.app.directive("markdown", function () {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                element.html("<div>Hello there</div>");
            }
        };
    });
})
