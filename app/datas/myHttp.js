/**
 * Created by 89418 on 2017/3/31.
 */
(function (angular) {
	var httpModule = angular.module("httpModule",[]);
	httpModule.service("httpService",["$window","$document",function (window,document) {
		this.jsonP = function(url,data,callback){
			if(url.indexOf("?") == -1){
				var allUrl = url + "?";
			}else{
				var allUrl = url;
			}
			var lastPath = "my_jsonp"+Math.round().toString().replace(".","");
			var callbackFun = "callback=" + lastPath;
			window[lastPath] = function (data) {
				callback(data);
				document[0].body.removeChild(script);
			};
			for(var key in data){
				allUrl += key + "=" +data[key] +"&";
			}
			allUrl += callbackFun;
			var script = document[0].createElement("script");
			script.src = allUrl;
			document[0].body.appendChild(script);
		}
	}]);
})(angular);
