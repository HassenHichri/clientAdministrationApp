/**
 * Created by hassen on 06/06/17.
 */
'use strict';

angular.module('clientAdminApp')

    .controller('clientsDashboardController', ['$scope', 'clientsFactory', '$route', '$timeout',
        function($scope,clientsFactory,$route, $timeout) {
        $scope.showClients = false;
        $scope.errorMessage = "Loading...";
        clientsFactory.getClients().query(
            function(response) {
                $scope.clients = response;
                $scope.showClients = true;
            },
            function(response) {
                $scope.errorMessage = "Error: "+response.status + " " + response.statusText;
            });

        $scope.deleteClient = function(clientId){
            if (confirm("Do you want to delete this client!") == true) {
                clientsFactory.getClients().remove({id:clientId});
                $timeout(function(){
                    $route.reload();
                }, 100);

            }
        }
    }]);
