backSystem.controller('commonDetailCtrl',['$scope','$stateParams','$http','$state',function($scope,$stateParams,$http,$state){
    $scope.id = $stateParams.id;
    $scope.detailImgUrl='/mock/'+$state.current.name.slice(0,6)+'.json';
    $http({
        url:$scope.detailImgUrl
    })
        .then(function (response) {
            $scope.movie = response.data.movie;
            for(var i=0;i<$scope.movie.length;i++){
                if($scope.id==$scope.movie[i].id){
                    $scope.curMovie = $scope.movie[i];
                }
            }
        })
    $scope.back = function () {
        $state.go($state.current.name.slice(0,6));
    }
}]);