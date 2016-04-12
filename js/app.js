var mainApp = angular.module("mainApp", []);

mainApp.controller("studentController", function($scope) {
  	$scope.listBooks = [];
	//$scope.contact = {};
    
	$scope.addNew = function(){
		document.getElementById('firstName').focus();
	}
	 
	$scope.deleteBook = function(ind){
		$scope.listBooks.splice(ind,1);
	}
	
	$scope.editBook = function(ind){
		$scope.contact = $scope.listBooks[ind];
		$scope.listBooks.splice(ind,1);
	}

	$scope.save = function(){
		$scope.listBooks.push($scope.contact);
		$scope.contact = {};
	}
});