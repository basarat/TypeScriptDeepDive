define(["require", "exports", "angular", "showdown"], function(require, exports) {
    var angular = require("angular");
    var showdown = require("showdown");
    exports.app = angular.module("mainApp", [], function () {
    });
    exports.app.directive("markdown", function () {
        var converter = new showdown.converter();
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                var htmlText = converter.makeHtml($.trim(element.text()));
                element.html(htmlText);
            }
        };
    });
    exports.app.directive("codeseg", function () {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                var htmlText = $.trim(element.text());
                element.html('<pre><code contenteditable>' + htmlText + '</code></pre>');
            }
        };
    });
})
