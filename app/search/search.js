/**
 * Created by 89418 on 2017/4/3.
 */
var app = angular.module("searchMoudle",[]);
app.directive("search",["$route",function (route) {
	return{
		restrict:"A",
		templateUrl: "search/search.html",
		link:function (scope,element,attributes) {
			scope.input = "";
			scope.search = function () {
				route.updateParams({type:"search",q:scope.input});
				scope.input = "";
			}
		}
	}
}]);
