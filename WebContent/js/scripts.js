var app = angular.module('myApp',[]);
app.controller('indexController', function($scope) {
		$scope.home = "hi";
		
		$scope.menuNav = ['Home','Nav', 'Ref','Contact'];
		
		var sub = ["Phone","Fax","Email"];	
		
		var info = {id: 1, name: 'Info', children: sub};
		var news = {id: 2, name: 'News',children:sub};
		var stat = {id: 3, name: 'Stat'};
		
		$scope.sideMenu = [info, news, stat];

});
$(document).ready(function(){
$("#menu").show();
$("#left #bo").click(function(){
	$("#menu").slideToggle(300);
});
});