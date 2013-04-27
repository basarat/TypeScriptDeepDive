require.config({
    baseUrl: './scripts',
    paths: {
        angular: '../lib/angular',
        text: '../lib/require/text',
        showdown: '../lib/showdown/showdown'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularMocks': {deps:['angular'], 'exports':'angular.mock'}
    },
    priority: [
        "angular"
    ]
});

// This is boilerplate
require( [
    'angular',
    'app'
], function(angular, app) {
    'use strict';
    $(document).ready(function () {
        var $html = $('html');
        angular.bootstrap($html, [app.app['name']]);
        // Because of RequireJS we need to bootstrap the app app manually
        // and Angular Scenario runner won't be able to communicate with our app
        // unless we explicitely mark the container as app holder
        // More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ
        $html.addClass('ng-app');
    });
});