var appControllers = angular.module('appControllers', []);

appControllers.controller('mainController', [
	'$scope',
	'appService',
	function ($scope, appService) { 

		$scope.textObject = {
			title: 'Employee Management App',
			ptnAdd: 'Add Employee'
		};

		appService.getJson().then(function(data) {
			$scope.employeesList = data;
			$scope.employees = angular.copy( $scope.employeesList);
		});

		$scope.enabledEdit =[];

		$scope.addEmployee = function(){
			var emp ={ firstName:"",lastName:"",email:"",
			project:"",designation:"",empId:"",disableEdit:false};
			$scope.employees.push(emp);
			$scope.enabledEdit[$scope.employees.length-1]=true;
		}
		$scope.editEmployee = function(index){
			console.log("edit index"+index);
			$scope.enabledEdit[index] = true;
		}
		$scope.deleteEmployee = function(index) {
			$scope.employees.splice(index,1);
		}

		$scope.submitEmployee = function(){
			console.log("form submitted:"+ angular.toJson($scope.employees));
		}

}]);



/*
app.controller("MainController",['$scope',function($scope){

   $scope.data = [{ firstName:"Jayaram",lastName:"P",email:"jayaram@gmail.com",
                     project:"javasavvy",designation:"Software Engineer",empId:"10001"},
                {firstName:"Arjun",lastName:"D",email:"Arjun@gmail.com",
                     project:"Sample Project",designation:"Test",empId:"10002"                 
                } ];


  $scope.empoyees = angular.copy( $scope.data);
   $scope.enabledEdit =[];

    $scope.addEmployee = function(){
      var emp ={ firstName:"",lastName:"",email:"",
                     project:"",designation:"",empId:"",disableEdit:false};
    $scope.empoyees.push(emp);
     $scope.enabledEdit[$scope.empoyees.length-1]=true;
  }
  $scope.editEmployee = function(index){
    console.log("edit index"+index);
    $scope.enabledEdit[index] = true;
  }
  $scope.deleteEmployee = function(index) {
      $scope.empoyees.splice(index,1);
  }
  
  $scope.submitEmployee = function(){

    console.log("form submitted:"+angular.toJson($scope.empoyees ));
  }
  
}]);*/