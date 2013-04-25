define(["require", "exports", "angular"], function(require, exports) {
    var angular = require("angular");
    exports.app = angular.module("mainApp", [], function () {
    });
    exports.app.directive("markdown", function () {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                return "markdown baby";
            }
        };
    });
})
