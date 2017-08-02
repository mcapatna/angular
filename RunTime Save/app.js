"use strict";
angular.module("app",[])
      .controller("CustomerController",function CustomerController($scope){
$scope.customers=[
    {
        name:"stark",
        location:"winterfell",
        revenue:'7623'

    },{
        name:"KingLanding",
        location:"Cersi",
        revenue:'987623'

    },
    {
        name:"Danny StromBorn",
        location:"StromLand",
        revenue:'987633'
    }

]
})
.controller("addCustomerController",function addCustomerController($scope)
{
    $scope.saveCusotmer=function(){
        var customer={name:$scope.name,
            location:$scope.location,
            revenue:$scope.revenue

        };
        $scope.customers.push(customer)
    }
});
