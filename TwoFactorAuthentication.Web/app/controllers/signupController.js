'use strict';
app.controller('signupController', ['$scope', '$location', '$timeout', 'authService', function ($scope, $location, $timeout, authService) {

    $scope.savedSuccessfully = false;
    $scope.message = "";
    $scope.qrCodeSrc = "";
    $scope.qrCode = "";

    $scope.registration = {
        userName: "",
        password: "",
        confirmPassword: ""
    };

    $scope.signUp = function () {

        authService.saveRegistration($scope.registration).then(function (response) {

            $scope.savedSuccessfully = true;
            $scope.message = "User registered successfully, generating QR code...";
            $scope.qrCode = response.data.psk;
            $scope.qrCodeSrc = "https://chart.googleapis.com/chart?chs=260x260&chld=M|0&cht=qr&chl=otpauth://totp/" + $scope.registration.userName + "%3Fsecret%3D" + $scope.qrCode;

            $scope.registration.userName= "";
            $scope.registration.password = "";
            $scope.registration.confirmPassword = "";
  
        },
         function (response) {
             var errors = [];
             for (var key in response.data.modelState) {
                 for (var i = 0; i < response.data.modelState[key].length; i++) {
                     errors.push(response.data.modelState[key][i]);
                 }
             }
             $scope.savedSuccessfully = false;
             $scope.message = "Failed to register user due to:" + errors.join(' ');
         });
    };

    var startTimer = function () {
        var timer = $timeout(function () {
            $timeout.cancel(timer);
            $location.path('/login');
        }, 2000);
    }

}]);