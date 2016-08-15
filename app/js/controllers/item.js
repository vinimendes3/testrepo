var app = angular.module('App');

app.controller('ItemController', function($scope,
                                         $stateParams,
                                         $ionicViewSwitcher,
                                         $state,
                                         $ionicHistory) {

    $scope.item = {
        title: $stateParams.title,
        icon: $stateParams.icon,
        color: $stateParams.color
    };
    
    if (!$scope.item.color) {
        $ionicViewSwitcher.nextDirection('back');
        $ionicHistory.nextViewOptions({
            disableBack: true,
            disableAnimate : true,
            historyRoot  : true
        });
        $state.go('app.gallery');
    }
});