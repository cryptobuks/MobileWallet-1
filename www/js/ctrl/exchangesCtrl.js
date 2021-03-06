﻿angular.module('casinocoin.controllers')

.controller('ExchangesCtrl', function ($rootScope, $scope, $log, publicAPI, $ionicSideMenuDelegate) {
    $log.debug("### ExchangesCtrl ###");
    // enable sidemenu swipe
    $ionicSideMenuDelegate.canDragContent(true);
    // refresh exchanges information
    $scope.updateActiveExchanges = function () {
        $log.debug("### updateActiveExchanges() ###");
        publicAPI.getActiveExchanges().then(function (apiResult) {
            if (apiResult.status == 200) {
                $rootScope.activeExchanges = apiResult.data.Result.ActiveExchanges;
            }
        }).finally(function () {
            // Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');
        });
    }

    $scope.openExchangeURL = function (url) {
        $log.debug("### openExchangeURL: " + url);
        window.open(url, '_blank', 'location=yes');
    }

});