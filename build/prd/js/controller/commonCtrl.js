backSystem.controller('commonCtrl', ['$scope', '$http', '$state','$timeout', function ($scope, $http, $state,$timeout) {
    $scope.tipMsg='';
    $scope.isShowTip=0;
    $scope.mockUrl='/mock/'+$state.current.name+'.json';
    $http({
        url: $scope.mockUrl
    })
        .then(function (response) {
            $scope.movie = response.data.movie;
            $scope.pageMovie = $scope.movie.slice(0,6);
            $scope.totalPage = Math.ceil(response.data.movie.length / 6);
            $scope.curPage = 1;
        }, function () {
            console.log(' http request error');
        });
    $scope.go = function (id) {
        $state.go($state.current.name+'Detail', {
            id: id
        })
    };
    $scope.nextPage = function () {
        if(this.curPage!=this.totalPage){
            this.curPage++;
            this.pageMovie = this.movie.slice(this.curPage*6-6,this.curPage*6);
        }
        else if(this.curPage==this.totalPage){
            this.tipMsg='对不起，没有下一页了';
            this.isShowTip = 1;
            $timeout(function () {
                $scope.isShowTip=0;
            },1500);
        }
    }
    $scope.prePage = function () {
        if(this.curPage!=1){
            this.curPage--;
            this.pageMovie = this.movie.slice(this.curPage*6-6,this.curPage*6);
        }
        else if(this.curPage==1){
            this.tipMsg='对不起，已经是第一页了';
            this.isShowTip = 1;
            $timeout(function () {
                $scope.isShowTip=0;
            },1500);
        }
    }
    $scope.gotoPage = function () {
        if(this.pageIndex>0&&this.pageIndex<=this.totalPage){
            this.curPage=this.pageIndex;
            this.pageMovie = this.movie.slice(this.curPage*6-6,this.curPage*6);
        }
        else{
            this.tipMsg='对不起，没有您要找的页数';
            this.isShowTip = 1;
            $timeout(function () {
                $scope.isShowTip=0;
            },1500);
        }
    }
}]);