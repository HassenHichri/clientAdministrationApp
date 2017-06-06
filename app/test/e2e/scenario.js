/**
 * Created by hassen on 06/06/17.
 */
'use strict';

describe('clients Administration App E2E Testing', function() {
    it('should automatically redirect to / when location hash/fragment is empty', function() {

        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/");

    });

    describe('index', function() {
        beforeEach(function() {
            browser.get('#/');
        });

        it('should have a title', function() {
            expect(browser.getTitle()).
            toEqual('Engel & Voelkers clients app');
        });
    });

    describe('client 1 details', function() {
        beforeEach(function() {
            browser.get('#/client/edit/1');
        });

        it('should have a firstname', function() {
            var firstname = element(by.model('client.firstname'));
            firstname.getAttribute('value').then(function (value) {
                expect(value).
                toEqual('Hassen');
            });

        });
        it('should have a firstname', function() {
            var firstname = element(by.model('client.firstname'));
            firstname.getAttribute('value').then(function (value) {
                expect(value).
                toEqual('Hassen');
            });

        });
        it('should have a lastname', function() {
            var lastname = element(by.model('client.lastname'));
            lastname.getAttribute('value').then(function (value) {
                expect(value).
                toEqual('Hichri');
            });
        });
        it('should have a telephone number', function() {
            var telnumber = element(by.model('client.telnumber'));
            telnumber.getAttribute('value').then(function (value) {
                expect(value).
                toEqual('0781586158');
            });

        });
        it('should have a city', function() {
            var city = element(by.model('client.address.city'));
            city.getAttribute('value').then(function (value) {
                expect(value).
                toEqual('Antibes');
            });

        });
        it('should have a street', function() {
            var street = element(by.model('client.address.street'));
            street.getAttribute('value').then(function (value) {
                expect(value).
                toEqual('84 Boulevard Raymond poincaré, Res. le Silvaplana');
            });

        });
        it('should have a zipcode', function() {
            var zipcode = element(by.model('client.address.zipcode'));
            zipcode.getAttribute('value').then(function (value) {
                expect(value).
                toEqual('06160');
            });
        });
        it('should have an active save button', function() {
            var zipcode = element(by.name('savebutton'));
            zipcode.getAttribute('disabled').then(function (value) {
                expect(value).toBeFalsy()
            });
        });
    });

});