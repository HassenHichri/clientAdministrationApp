/**
 * Created by hassen on 06/06/17.
 */
angular.module('clientAdminApp')
    .factory('clientsFactory', ['$resource','baseURL',function($resource,baseURL) {

    var clientsFact = {};

    clientsFact.getClients = function(){
        return $resource(baseURL+"clients/:id",null,  {'update':{method:'PUT' }});
    };

    return clientsFact;

}]);