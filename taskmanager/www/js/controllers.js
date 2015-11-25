window.angular.module('app.controllers', [])

    .controller('taskListCtrl', ['$scope', function ($scope) {
        'use strict';
        
        window.console.log('taskListCtrl start...');
        
        $scope.taskList = [
            {id: 1, title: 'Task 01'},
            {id: 2, title: 'Task 02'}
        ];
        
        $scope.edit = function (task) {
            window.console.log(task);
        };
        
    }])
    
    .controller('taskRegisterCtrl', ['$scope', function ($scope) {
        'use strict';
        
        window.console.log('taskRegisterCtrl start...');
        
    }]);