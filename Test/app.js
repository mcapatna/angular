"use strict";
angular.module("app",[])
    .factory("CustomService",function($http){
        var serviceObject={
            getProducts:function(){
                return [
                        {productName:"abc",unitPrice:30},
                        {productName:"pqr",unitPrice:35}
                ];

                
            }
        };


        return serviceObject; 
    }) ;   
//     .controller("DemoController",
// function DemoController($scope,demoService){
//     $scope.message=demoService.hello();
//     $scope.userService=function(){
//         $scope.data=demoService.GetData();
//     }
// }) ;

