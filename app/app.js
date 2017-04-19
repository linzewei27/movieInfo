

var mainApp = angular.module("mainApp",[
    "ngRoute",
	"mainApp.movieDetial",
	"mainApp.movielist",
	"autoFocusModule",
	"searchMoudle"
]);
mainApp.config(["$routeProvider",function ($routeProvider) {
	$routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
}]).constant("AppConfig",{
		apiUrl : "http://api.douban.com/v2/movie/",
		subjectUrl:"http://api.douban.com/v2/movie/subject/",
		pageSize:10
	});
/*	.controller("searchController",["$scope","$route",function (scope,route) {
		scope.input = "";
		scope.search = function () {
			route.updateParams({type:"search",q:scope.input});
			scope.input = "";
		}
	}]);*/
