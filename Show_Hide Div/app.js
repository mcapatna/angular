"use strict";
angular.module("app",[])
      .controller("LoanController",function LoanController($scope, $rootScope){
        
$scope.validate=function(){
    if($scope.sal > 1000)
    alert("hi "+$scope.name+"You are fine to go...");
    else
        alert("hi "+$scope.name+" Sorry You are not fine to go...");
}
     

})
.controller("BranchController",function Branchcontroller($scope, $rootScope){
    $scope.branches=[
"HSR",
"Marathalli",
"ITPL",
"JayNamgar"
    ];
});
