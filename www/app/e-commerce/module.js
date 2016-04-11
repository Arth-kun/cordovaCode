"use strict";


angular.module('app.eCommerce', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.eCommerce', {
            abstract: true,
            data: {
                title: 'E-Commerce'
            }
        })

        .state('app.eCommerce.orders', {
            url: '/e-commerce/orders',
            data: {
                title: 'Orders'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/e-commerce/views/orders.html',
                    controller: 'OrdersDemoCtrl',
                    resolve: {
                        orders: function($http, APP_CONFIG){
                            return $http.get(APP_CONFIG.apiRootUrl + '/e-commerce/orders.json')
                        }
                    }
                }
            }, 
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.datatables.js'
                    ]);
                }
            }
        })

        .state('app.eCommerce.products', {
            url: '/e-commerce/products-view',
            data: {
                title: 'Products View'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/e-commerce/views/products.html'
                }
            }
        })

        .state('app.eCommerce.detail', {
            url: '/e-commerce/products-detail/:id',
            data: {
                title: 'Products Detail'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/e-commerce/views/detail.html'
                }
            }
        })

        .state('app.eCommerce.fiches', {
            url: '/e-commerce/fiches-view',
            data: {
                title: 'Fiches View'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/e-commerce/views/fiches.add.html'
                }
            }
        })

        .state('app.eCommerce.detailFiche', {
            url: '/e-commerce/fiches-detail/:id',
            data: {
                title: 'Fiches Detail'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/e-commerce/views/detail-fiche.add.html'
                }
            }
        })
});
