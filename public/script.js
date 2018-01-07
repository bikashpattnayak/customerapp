angular.module('myApp',['ngResource'])
    .controller('myCtrl',function($scope,todoService,$timeout,$log){
    	$scope.display = false;
    	$scope.submitform = function (isvalid,time) {
            $log.info('the form is '+ isvalid);
    		if(isvalid) {
    			$scope.formSubmit(time);
    		} else {
    			$log.info("invalid form");
    		}
    	};
    	$scope.formSubmit = function (time) {
            todoService.submit({},{'todo':$scope.task.todo,'user':$scope.task.user,'complete':$scope.task.complete,'date':$scope.task.date});
			$timeout(function() {
                $scope.tasks = todoService.query();
                $log.info('executed');
                $scope.tasks.$promise.then(function (){
                    $log.info('resetting the form');
                    $scope.resetform();
                });
    			$scope.display = true;
            },Number(time));

    	};
    	$scope.showTable = function () {
			$scope.tasks = todoService.query();
			$scope.display = true;
    	};

    	$scope.resetform = function () {
    		$scope.task = {};
    		$scope.todoform.$setPristine();
    	}
    	

    })
    .factory('todoService',function($resource){
    	return $resource('http://localhost:3000/api/todos',{},{'submit':{method:'POST'}});
    })