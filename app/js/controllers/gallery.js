var app = angular.module('App');

app.controller('GalleryController', function($scope,
											 $state) {

	$scope.openItem = function(item){
        $state.go('app.item', { title: item.title, icon: item.icon, color: item.color });
    };
});