window.angular.module('app.routes', [])
    
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'use strict';
        
        $stateProvider
            .state('taskList', {
                url: '/task-list',
                templateUrl: 'templates/task-list.html',
                controller: 'taskListCtrl'
            })
            .state('taskRegister', {
                url: '/task-register',
                templateUrl: 'templates/task-register.html',
                controller: 'taskRegisterCtrl'
            });
        
        $urlRouterProvider.otherwise('/task-list');
        
    }]);