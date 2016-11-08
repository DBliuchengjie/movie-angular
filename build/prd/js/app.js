var backSystem = angular.module('backSystem', ['ui.router']);


// backSystem.config(function($urlRouterProvider){
//     $urlRouterProvider.otherwise('movie1');
// });
backSystem.controller('appCtrl', ['$scope', '$http', '$state', '$timeout', function ($scope, $http, $state, $timeout) {
    $scope.movieArr = [['喜剧片', 'comedy', ''], ["动作片", 'action', ''], ["爱情片", 'lovers', ''], ["恐怖片", 'scary', ''], ["战争片", 'war', ''], ["纪录片", 'documentary', ''], ["剧情片", 'feature', ''], ["犯罪片", 'crime', ''], ["国产电影", 'china', ''], ["日韩电影", 'kreaJapan', ''], ["欧美电影", 'america', '']];
    $scope.isActive = function (activeIndex) {
        for (var i = 0; i < $scope.movieArr.length; i++) {
            if ($scope.movieArr[i][2]) {
                $scope.movieArr[i][2] = '';
            }
        }
        $scope.movieArr[activeIndex][2] = 'active';
    }
    $scope.backToHome = function () {
        for (var i = 0; i < $scope.movieArr.length; i++) {
            if ($scope.movieArr[i][2]) {
                $scope.movieArr[i][2] = '';
            }
        }
    }
}]);

backSystem.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('homePG', {
            url: '/homePG',
            templateUrl: '/src/js/views/home.html',
            controller:'homeCtrl'
        })
        .state('homePGDetail', {
            url: '/homePG/:id',
            templateUrl: '/src/js/views/commonDetail.html',
            controller: 'commonDetailCtrl'
        })
        .state('comedy', {
            url: '/comedy',
            templateUrl: '/src/js/views/common.html',
            controller: 'commonCtrl'
        })
        .state('comedyDetail', {
            url: '/comedy/:id',
            templateUrl: '/src/js/views/commonDetail.html',
            controller: 'commonDetailCtrl'
        })
        .state('action', {
            url: '/action',
            templateUrl: '/src/js/views/common.html',
            controller: 'commonCtrl'
        })
        .state('actionDetail', {
            url: '/action/:id',
            templateUrl: '/src/js/views/commonDetail.html',
            controller: 'commonDetailCtrl'
        })
        .state('lovers', {
            url: '/lovers',
            templateUrl: '/src/js/views/common.html',
            controller: 'commonCtrl'
        })
        .state('loversDetail', {
            url: '/lovers/:id',
            templateUrl: '/src/js/views/commonDetail.html',
            controller: 'commonDetailCtrl'
        })
    $urlRouterProvider.otherwise('homePG');
}])