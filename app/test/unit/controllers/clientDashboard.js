/**
 * Created by hassen on 06/06/17.
 */
describe('Controller: clientsDashboardController', function () {

    // load the controller's module
    beforeEach(module('clientAdminApp'));

    var clientsDashboardController, scope, $httpBackend, route, timeout;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, _$httpBackend_,  $rootScope, clientsFactory, $route, $timeout) {

        // place here mocked dependencies
        $httpBackend = _$httpBackend_;

        $httpBackend.expectGET("http://localhost:3000/clients").respond([
            {
                "firstname": "Hassen",
                "lastname": "Hichri",
                "telnumber": "0781586158",
                "address": {
                    "city": "Antibes",
                    "street": "84 Boulevard Raymond poincaré, Res. le Silvaplana",
                    "zipcode": "06160"
                },
                "id": 1
            }
        ]);

        scope = $rootScope.$new();
        clientsDashboardController = $controller('clientsDashboardController', {
            $scope: scope, clientsFactory: clientsFactory, $route: route, $timeout : timeout
        });
        $httpBackend.flush();

    }));

    it('should create "clients" with 1 client fetched from xhr', function(){

        expect(scope.showClients).toBeTruthy();
        expect(scope.clients).toBeDefined();
        expect(scope.clients.length).toBe(1);

    });

});