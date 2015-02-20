var mymod = angular.module('mymod', ['appServices']);

mymod.controller("TableController", function ($scope,$http, userServices){


    $http.post("/services/myService/display").success(function(response) {

       //userServices.users = response;
      //  console.log(userServices.users);
        console.log("response");
        userServices.setUser(response);
        $scope.pageUsers=userServices.getPage();
        $scope.autoPaging = userServices.autoPage()
    });

    $scope.sort = function (id) {
        $scope.sortID = id;
    };

    $scope.getCurrentPage = function() {
        $scope.pageUsers=userServices.getPage();
    };



    $scope.setPageIndex =function(id) {
        userServices.setPageIndex(id);
        $scope.getCurrentPage();
    };

    $scope.clickCreate = function(){
        $scope.fName ='';
        $scope.lName ='';
        $scope.age   ='';
        $scope.sex   ='';
    };

    $scope.clickEdit = function(id) {
        userServices.clickEdit(id);

    };

    $scope.deleteUser = function(id){
        $scope.pageUsers=userServices.deleteUser(id);
        $scope.autoPaging = userServices.autoPage()
    };
});

mymod.controller("EditController", function ($http,$scope, userServices)
{
    $scope.user=userServices.getCurrentEdit()
    //$scope.user.fName = userServices.getCurrentEdit().fName;
    //$scope.user.lName = userServices.getCurrentEdit().lName;
    // $scope.user.age   = userServices.getCurrentEdit().age;
    //$scope.user.sex   = userServices.getCurrentEdit().sex;


    $scope.submitEdit=  function() {

alert('fff');

        $http.post("/services/myService/editUser",$scope.user).success(function(response) {

            console.log("response");

        });
    };
});

mymod.controller("CreateController", function ($http, $scope, userServices) {
    $scope.user={};
    $scope.submitCreate=  function() {
        //userServices.submitCreate($scope.fName, $scope.lName, $scope.age, $scope.sex);
        $http.post("/services/myService/addUser",$scope.user).success(function(response) {

            console.log("response");

        });
    };

});