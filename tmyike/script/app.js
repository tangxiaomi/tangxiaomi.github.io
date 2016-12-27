/**
 * Created by lenovo on 2016/12/24.
 */
var app=angular.module('Yike',['ngRoute','demo'])//这里都是模板的名字
app.run(['$rootScope',function($rootScope){ //加中括号 这是全局的跟作用域，和控制器一样，不过工作中控制器不会很大，所有用这些数据的时候要用全局的来完成
    //控制一个类，让他显示和隐藏
    //用来设置加载的状态
    $rootScope.load=false;
    //设置上边的标题
    $rootScope.title='今日一刻';
    //设置是否被点击选中
    $rootScope.current=0;
    $rootScope.isAppear=false;//不用加单引号

    $rootScope.toggle=function(){
        $rootScope.isAppear=! $rootScope.isAppear;
        //给dd加动画
        var dd=document.querySelectorAll('.navs dd');
        if( $rootScope.isAppear){
            for(var i=0;i<dd.length;i++){
                dd[i].style.transform='translate(0)';//让dd跑回来
                dd[i].style.transitionDuration=(i + 1) * 0.15 + 's';//执行的时间
                dd[i].style.transitionDelay='0.2s';//延迟的时间
            }
        }else{
            var len=dd.length
            for(var i=len-1;i>=0;i--){
                //后边的先执行，所以后边的快  但是要保证i是从小到大排序，才能越来越慢
                //i 5 4 6 3  2 1 0          len 6
                dd[i].style.transform='translate(-100%)';//让dd跑回来
                dd[i].style.transitionDuration=(len-1-i) * 0.15 + 's';//执行的时间
                dd[i].style.transitionDelay=0+'s';//延迟的时间   必须的加单位
            }
        }

    }
}])
    //配置路由  这个不是自定义的东西，所以不用弄成一个模块
    app.config(['$routeProvider',function(routeProvider){
        routeProvider.when('/today',{
            templateUrl:'./views/today.html',
            controller:'todayCtrl'//因为是要用到contrl请求的数据了
        }).when('/older',{
            templateUrl:'./views/older.html',
            controller:'olderCtrl'
        }).when('/hot',{
            templateUrl:'./views/hot.html',
            controller:'hotCtrl'
        }).when('/colume',{
            templateUrl:'./views/category.html',
            controller:'categoryCtrl'
        }).when('/like',{
            templateUrl:'./views/favourite.html'
        }).when('/settings',{
            templateUrl:'./views/settings.html'
        }).otherwise({
            redirectTo:'/today'
        })
    }])
