/**
 * Created by 89418 on 2017/3/31.
 */

	var model = angular.module("mainApp.movielist",["ngRoute","httpModule"]);
	model.config(["$routeProvider",function ($routeProvider) {
		$routeProvider.when("/:type/:page?",{
			templateUrl:"movielist/view.html",
			controller:"MovielistController"
		});
	}]);
	model.controller("MovielistController",["$scope","$route","$routeParams","$http","httpService","AppConfig",function ($scope,$route,$routeParams,$http,httpService,AppConfig) {
		$scope.data =  [];
		/*$http({
			method: 'GET',
			url: '/主流框架/moviecat/app/datas/in_theaters.json'
		}).then(function successCallback(response) {
			$scope.data = response.data.subjects;
		}, function errorCallback(response) {

		});*/
		var count = AppConfig.pageSize;
		var start = ($routeParams.page - 1) *10;
		$scope.totalInfo = 0;
		$scope.totalPage = 0;
		$scope.currentPage = 0;
		$scope.loadding = true;
		httpService.jsonP(AppConfig.apiUrl+$routeParams.type+"",{count:count,start:start,q:$routeParams.q},function (data) {
			$scope.data = data.subjects;
			$scope.totalInfo = data.total;
			$scope.title = data.title;
			$scope.currentPage = parseInt($routeParams.page);
			$scope.totalPage = Math.ceil(data.total/count);
			$scope.loadding = false;
			$scope.$apply();
		});
		$scope.goToPage = function (page) {
			if(page>=1 && page<=$scope.totalPage) {
				$route.updateParams({page: page});
			}
		}
	}]);

