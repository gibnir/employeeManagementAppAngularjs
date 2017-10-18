var appDirectives = angular.module('appDirectives', []);

appDirectives.directive('tablePtnDirective', function() { 
	return { 
		restrict: 'E', 
		scope: {
			index: '@',
			editEmployee: '&',
			deleteEmployee: '&'
		},
		transclude: true,
		templateUrl: 'app/directives/table-ptn-directive.html',
		link: function(scope, element, attrs) {
			console.log(scope.index);
			// console.log(scope.$parent.$parent);

		// scope.editEmployee = function(index){
		// 	console.log("edit index"+index);
		// 	// scope.$parent.$parent.enabledEdit[index] = true;
		// }
		// scope.deleteEmployee = function(index) {
		// 	// scope.$parent.$parent.employees.splice(index,1);
		// }
}
}; 
});

// appDirectives.directive('tablePtnDirective', function() {
// 	return { 
// 		restrict: 'E', 
// 		scope: {
// 			info: '=' 
// 		}, 
// 		templateUrl: 'app/directives/table-ptn-directive.html' 
// 	}; 
// });