/**
 * Created by 89418 on 2017/4/3.
 */

var model = angular.module("mainApp.movieDetial",["ngRoute","httpModule"]);
model.config(["$routeProvider",function ($routeProvider) {
	$routeProvider.when("/subject/:id",{
		templateUrl:"movieDetial/view.html",
		controller:"MovieDetialController"
	});
}]);
model.controller("MovieDetialController",["$scope","$routeParams","httpService","AppConfig",function ($scope,$routeParams,httpService,AppConfig) {
	$scope.data =  [];
	$scope.loadding = true;
	httpService.jsonP(AppConfig.subjectUrl+$routeParams.id+"",{},function (data) {
		$scope.data = data;
		$scope.loadding = false;
		$scope.$apply();
	});
}]);

