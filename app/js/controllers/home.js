var app = angular.module('App');

app.controller('HomeController', function($scope,
										$ionicPopup,
										Modals) {

	$scope.HelloWorld = function () {

		$ionicPopup.alert({
			
			title: 'Hello World',
			template: 'This is the best template to start with Ionic Framework!',
 			cssClass: 'animated bounceInDown'
		});
	};
	
	//Center content
	//1. http://codepen.io/mhartington/pen/gcHeL
	//2. http://codepen.io/anon/pen/meQJvp
}); 