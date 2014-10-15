'use strict';
app.controller('transferMoneyController', ['$scope', 'moneyTransService', function ($scope, moneyTransService) {

    $scope.savedSuccessfully = false;

    $scope.message = "";

    $scope.transferData = {
        fromEmail: "",
        toEmail: "",
        amount: "",
        oneTimePassword: ""
    };

    $scope.transfer = function () {

        moneyTransService.transferMoney($scope.transferData).then(function (response) {

            $scope.message = "Money transfered successfully";
            $scope.savedSuccessfully = true;
            $scope.transferData.fromEmail = "";
            $scope.transferData.toEmail = "";
            $scope.transferData.amount = "";
            $scope.transferData.oneTimePassword = "";
           
  
        },
        function (response) {
            $scope.savedSuccessfully = false;
            $scope.message = "Failed to transfer money: "+ response.data.message;
        });
    };

}]);