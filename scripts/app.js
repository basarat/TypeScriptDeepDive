define(["require", "exports", "angular", "showdown"], function(require, exports) {
    var angular = require("angular");
    var Showdown = require("showdown");
    exports.app = angular.module("mainApp", [], function () {
    });
    exports.app.directive("markdown", function () {
        var converter = new Showdown.converter();
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                var htmlText = converter.makeHtml(element.text());
                element.html(htmlText);
            }
        };
    });
})
