"use strict";
angular.module("app",[])
      .controller("DemoController",function DemoController($scope){
        $scope.message="Hello Bro...";
$scope.showGreeting=function(){
    alert("hi "+$scope.name);
};
      });