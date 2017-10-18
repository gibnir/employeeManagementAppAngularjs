var employeeManagementApp = angular.module('employeeManagementApp', [
  'appServices',
  'appControllers',
  'appDirectives'
  ]);


// app.controller("MainController",['$scope',function($scope){

//    $scope.data = [{ firstName:"Jayaram",lastName:"P",email:"jayaram@gmail.com",
//                      project:"javasavvy",designation:"Software Engineer",empId:"10001"},
//                 {firstName:"Arjun",lastName:"D",email:"Arjun@gmail.com",
//                      project:"Sample Project",designation:"Test",empId:"10002"                 
//                 } ];


//   $scope.empoyees = angular.copy( $scope.data);
//    $scope.enabledEdit =[];

//     $scope.addEmployee = function(){
//       var emp ={ firstName:"",lastName:"",email:"",
//                      project:"",designation:"",empId:"",disableEdit:false};
//     $scope.empoyees.push(emp);
//      $scope.enabledEdit[$scope.empoyees.length-1]=true;
//   }
//   $scope.editEmployee = function(index){
//     console.log("edit index"+index);
//     $scope.enabledEdit[index] = true;
//   }
//   $scope.deleteEmployee = function(index) {
//       $scope.empoyees.splice(index,1);
//   }
  
//   $scope.submitEmployee = function(){

//     console.log("form submitted:"+angular.toJson($scope.empoyees ));
//   }
  
// }]);


// var sideBarApp = angular.module('sideBarApp', [
// 	'ngRoute',
// 	'sideBarControllers',
// 	'sideBarDirective'
// ]);

// sideBarApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/sidebar', {
//         templateUrl: 'views/side-bar-content.html',
//         controller: 'sidebarCtrl'
//       }).
//       otherwise({
//         redirectTo: '/sidebar'
//       });
//   }]);



