/*
Template Name: Reback - Responsive 5 Admin Dashboard
Author: Techzaa
File: dashboard - ecommerce js
*/

class ECommerceSellerAdd {

    constructor() {
    }

    init() {
        new Wizard('#horizontalwizard');
    }

}

window.loadECommerceSellerAdd = function () {
    new ECommerceSellerAdd().init();
}