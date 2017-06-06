/**
 * Created by hassen on 06/06/17.
 */
'use strict';
angular.module('clientAdminApp')
    .controller('clientEditCreateController', ['$scope','clientsFactory','$routeParams', '$timeout', '$route', '$location',
        function($scope,clientsFactory,$routeParams,$timeout,$route,$location) {
        $scope.showSuccessMessage = false;
        $scope.successMessage = "";
        //check if we are editing or creating a new client through the id on the url
        if($routeParams.id){
            clientsFactory.getClients().get({id:parseInt($routeParams.id,10)})
                .$promise.then(
                function(response){
                    $scope.client = response;
                },
                function(response) {
                    $scope.errorMessage = "Error: "+response.status + " " + response.statusText;
                }
            );
        }else{
            $scope.client = {};
        }

        $scope.saveClient = function(){
            if(!$routeParams.id){
                $scope.client.id = getLastIndex();
                clientsFactory.getClients().save($scope.client,function(){
                    $scope.showSuccessMessage = true;
                    $scope.successMessage = "Informations saved";
                    $timeout( function(){
                        $location.path('/')
                    }, 1000 );
                });
            }else{
                clientsFactory.getClients().update({id:$scope.client.id},$scope.client);
                $scope.showSuccessMessage = true;
                $scope.successMessage = "Informations saved";
                $timeout( function(){
                    $route.reload();
                }, 1000 );
            }

        };

        //a function that will return the id of the last client
        function getLastIndex() {
            var clients;
            var lastIndex;
            clientsFactory.getClients().query(
                function(response) {
                    clients = response;
                    if(clients.length>0){
                        lastIndex = clients[clients.length-1].id;
                    }else{
                        lastIndex = 0;
                    }
                    return lastIndex;
                });
        }
    }]);
