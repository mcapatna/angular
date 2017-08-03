"use strict";
angular.module("app",[])
      .controller("DemoController",function DemoController($scope){
        $scope.branches=[
            "marathalli",
            "majestic",
            "Electronic city phase-2",
            "IndiraNamgar",
            "whitefield",
            "jayaNagar"

        ];
      })
      .filter("removespaces",function(){
            return function(input){
                  return input.trim();
            };
      });
// $scope.showGreeting=function(){
//     alert("hi "+$scope.name);
// };
//       });