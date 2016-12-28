var app = angular.module('myApp', []);
	app.controller('booksController', function($scope, $http) {
	$http.get("http://krispypapad.herokuapp.com/fetch_article").then(function (response) {
		$scope.books = response.data.response;
	});
});