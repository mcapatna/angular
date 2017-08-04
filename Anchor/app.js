"use strict";
angular.module("app",[])
    .factory("demoService",function(){
        var serviceObject={
            hello:function(){
                return "hello Bro " ;
            },
            getData:function(){
                return(
                    [{
                        name:"abc",
                        location:"ITPL"
                    },
                {
                    name:"xyz",
                    location:"Marathalli"
                }
                ] );
            }
        };
        return serviceObject; 
    })    
    .controller("DemoController",
function DemoController($scope,demoService){
    $scope.message=demoService.hello();
    $scope.userService=function(){
        $scope.data=demoService.GetData();
    }
}) ;

