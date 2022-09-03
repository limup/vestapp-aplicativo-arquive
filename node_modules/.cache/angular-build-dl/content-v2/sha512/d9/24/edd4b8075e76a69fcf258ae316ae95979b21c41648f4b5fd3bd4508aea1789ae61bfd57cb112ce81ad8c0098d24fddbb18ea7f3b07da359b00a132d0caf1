(self["webpackChunkVestApp_Marketplace"] = self["webpackChunkVestApp_Marketplace"] || []).push([["src_app_tab1_prod-detail_prod-detail_module_ts"],{

/***/ 93545:
/*!****************************************************************!*\
  !*** ./src/app/tab1/prod-detail/prod-detail-routing.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdDetailPageRoutingModule": function() { return /* binding */ ProdDetailPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _prod_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prod-detail.page */ 610);




const routes = [
    {
        path: '',
        component: _prod_detail_page__WEBPACK_IMPORTED_MODULE_0__.ProdDetailPage
    }
];
let ProdDetailPageRoutingModule = class ProdDetailPageRoutingModule {
};
ProdDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProdDetailPageRoutingModule);



/***/ }),

/***/ 56573:
/*!********************************************************!*\
  !*** ./src/app/tab1/prod-detail/prod-detail.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdDetailPageModule": function() { return /* binding */ ProdDetailPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _prod_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prod-detail-routing.module */ 93545);
/* harmony import */ var _prod_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prod-detail.page */ 610);







let ProdDetailPageModule = class ProdDetailPageModule {
};
ProdDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _prod_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProdDetailPageRoutingModule
        ],
        declarations: [_prod_detail_page__WEBPACK_IMPORTED_MODULE_1__.ProdDetailPage]
    })
], ProdDetailPageModule);



/***/ }),

/***/ 610:
/*!******************************************************!*\
  !*** ./src/app/tab1/prod-detail/prod-detail.page.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdDetailPage": function() { return /* binding */ ProdDetailPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_prod_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./prod-detail.page.html */ 75296);
/* harmony import */ var _prod_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prod-detail.page.scss */ 8197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ 90910);






let ProdDetailPage = class ProdDetailPage {
    constructor(route, cartService) {
        this.route = route;
        this.cartService = cartService;
        this.showData = false;
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.product = data.product;
            this.showData = true;
        });
    }
    addProduct(product) {
        this.cartService.addToCart(product);
    }
};
ProdDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService }
];
ProdDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-prod-detail',
        template: _raw_loader_prod_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_prod_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProdDetailPage);



/***/ }),

/***/ 8197:
/*!********************************************************!*\
  !*** ./src/app/tab1/prod-detail/prod-detail.page.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kLWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 75296:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/prod-detail/prod-detail.page.html ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalhes do Produto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n   <ion-slides class=\"ion-padding\" pager>\n     <ion-slide *ngFor=\"let i of product?.images\">\n       <ion-img [src]=\"i?.src\" alt=\"{{ product?.name }}\"></ion-img>\n     </ion-slide>\n   </ion-slides>\n\n  <ion-item-divider></ion-item-divider>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col class=\"ion-no-padding\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              <h2>{{ product?.name }}</h2>\n            </ion-card-title>\n            <ion-card-subtitle>\n              <ion-chip *ngFor=\"let c of product?.categories\" color=\"dark\">\n                {{ c?.name}}\n              </ion-chip>\n            </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-label>\n              <p>{{ product?.description.substr(0, 50) }}</p>\n              <ion-card-subtitle>\n                <h3>{{ product?.price | currency:\"R$\" }}</h3>\n              </ion-card-subtitle>\n            </ion-label>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style=\"padding: 0 10px;\">\n    <ion-label>\n      <ion-button color=\"dark \" expand=\"full\" fill=\"solid\" (click)=\"addProduct(product)\">\n        Adicionar ao Carrinho\n      </ion-button>\n    </ion-label>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_prod-detail_prod-detail_module_ts-es2015.js.map