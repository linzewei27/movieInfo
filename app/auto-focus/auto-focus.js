/**
 * Created by 89418 on 2017/4/1.
 */
var autoFocusModule = angular.module("autoFocusModule",[]);
autoFocusModule.directive("autoFocus",["$location",function (location) {
	return {
		restrict:"A",
		link:function ($scope, iElm, iAttrs, controller) {
			$scope.location = location;
			$scope.$watch("location.path()",function (now,old) {
				var type = iElm.children().attr("href").replace(/#(\/.+?)\/\d+/,"$1");
				/*console.log(now);*/
				if(now.startsWith(type)){
					iElm.parent().children().removeClass("active");
					iElm.addClass("active");
				}
			});

			/*iElm.on("click",function () {
				iElm.parent().children().removeClass("active");
				iElm.addClass("active");
			})*/
			/*console.log(iElm);*/
		}
	}
}]);
