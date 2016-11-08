backSystem.controller('homeCtrl',['$scope','$http','$state',function($scope,$http,$state){
    $http({
        url:'/mock/home.json'
    })
        .then(function (response) {
            $scope.homeMovie=response.data.movie;
        })
    $scope.go = function (id) {
        $state.go($state.current.name+'Detail', {
            id: id
        })
    };
}]);