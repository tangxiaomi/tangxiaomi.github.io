/**
 * Created by lenovo on 2016/12/24.
 */
//先创建一个模板   (点击事件触发这里边的contrl)
angular.module('demo', [])//别加符号  这个只是导航栏的控制器
    .controller('navCtrl', function ($scope) {
        $scope.navs = [
            {link: '#/today', txt: '今日一刻', class: 'icon-home'},
            {link: '#/older', txt: '往期内容', class: 'icon-file-empty'},
            {link: '#/hot', txt: '热门作者', class: 'icon-pencil'},
            {link: '#/colume', txt: '栏目浏览', class: 'icon-menu'},
            {link: '#/like', txt: '我的喜欢', class: 'icon-heart'},
            {link: '#/settings', txt: '设置', class: 'icon-cog'}
        ];
    })

    //今日一刻
    .controller('todayCtrl', function ($scope, $http, $rootScope) {
        $rootScope.load = false; //为了每次请求数据 之前都是有加载状态的
        $rootScope.title = '今日一刻';
        $rootScope.current = 0;
        $http({
            url: './api/today.php'
        }).success(function (info) {
            $scope.posts = info.posts;
            $scope.date = info.date;
            $rootScope.load = true;  //在这个控制器中使用到了$rootScope这个服务
        })
    })

    //往期内容
  .controller('olderCtrl', function ($scope, $http, $rootScope) {
        $rootScope.load = false;
        $rootScope.title = '往期内容';
        $rootScope.current = 1;
        $scope.day = -1;//将要减的天数，通过参数传给后台，后台帮你减一后，再返回来*/
        $http({
            url: './api/older.php',
            params: {day: $scope.day}
        }).success(function (info) {
            console.log(1);
            console.log(info);
            $scope.date = info.result.date;
            $scope.posts = info.result.posts;
            $rootScope.load = true;
            //接收天数
            $scope.day = info.day;
        })

    })
    //热门作者
    .controller('hotCtrl',function($scope, $http, $rootScope){
        $rootScope.load = false;
        $rootScope.title = '热门作者';
        $rootScope.current = 2;
        $http({
            url: './api/hot.php',
        }).success(function (info) {
            console.log(info);
            $scope.recs= info.rec.authors;
            $scope.alls = info.all.authors;
            $rootScope.load = true;
        })
    })

//栏目浏览
    .controller('categoryCtrl',function($scope, $http, $rootScope){
        $rootScope.load = false;
        $rootScope.title = '栏目浏览';
        $rootScope.current = 3;
        $http({
            url:'./api/category.php'
        }).success(function(info){
            console.log(info);
            $scope.categorys=info.columns;  //得到的是一个数组
            console.log($scope.categorys);
            $rootScope.load = true;
        })
    })
