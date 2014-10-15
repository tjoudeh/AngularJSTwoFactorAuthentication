'use strict';
app.controller('moneyTransController', ['$scope', 'moneyTransService', function ($scope, moneyTransService) {

    $scope.transactionsHistory = [];

    moneyTransService.getHistory().then(function (results) {

        $scope.transactionsHistory = results.data;

    }, function (error) {
        //alert(error.data.message);
    });

}]);