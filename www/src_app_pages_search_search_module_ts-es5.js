(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkVestApp_Marketplace"] = self["webpackChunkVestApp_Marketplace"] || []).push([["src_app_pages_search_search_module_ts"], {
    /***/
    76980:
    /*!*******************************************************!*\
      !*** ./src/app/pages/search/search-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchPageRoutingModule": function SearchPageRoutingModule() {
          return (
            /* binding */
            _SearchPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./search.page */
      9166);

      var routes = [{
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
      }];

      var _SearchPageRoutingModule = function SearchPageRoutingModule() {
        _classCallCheck(this, SearchPageRoutingModule);
      };

      _SearchPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SearchPageRoutingModule);
      /***/
    },

    /***/
    20281:
    /*!***********************************************!*\
      !*** ./src/app/pages/search/search.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchPageModule": function SearchPageModule() {
          return (
            /* binding */
            _SearchPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./search-routing.module */
      76980);
      /* harmony import */


      var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search.page */
      9166);

      var _SearchPageModule = function SearchPageModule() {
        _classCallCheck(this, SearchPageModule);
      };

      _SearchPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
      })], _SearchPageModule);
      /***/
    },

    /***/
    9166:
    /*!*********************************************!*\
      !*** ./src/app/pages/search/search.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchPage": function SearchPage() {
          return (
            /* binding */
            _SearchPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./search.page.html */
      86620);
      /* harmony import */


      var _search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search.page.scss */
      15411);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/product.service */
      66082);

      var _SearchPage = /*#__PURE__*/function () {
        function SearchPage(productService) {
          _classCallCheck(this, SearchPage);

          this.productService = productService;
          this.filteredProducts = [];
        }

        _createClass(SearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "search",
          value: function search(ev) {
            var _this = this;

            this.touched = false;
            this.filteredProducts = [];
            this.showSkeleton = true;
            this.productService.searchProducts(ev.target.value).subscribe(function (prods) {
              if (prods.length <= 0) {
                _this.touched = true;
              } else {
                _this.touched = false;
              }

              _this.showSkeleton = false;
              _this.filteredProducts = prods;
            }, function (err) {
              return console.log(err);
            });
          }
        }]);

        return SearchPage;
      }();

      _SearchPage.ctorParameters = function () {
        return [{
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService
        }];
      };

      _SearchPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-search',
        template: _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SearchPage);
      /***/
    },

    /***/
    15411:
    /*!***********************************************!*\
      !*** ./src/app/pages/search/search.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    86620:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Pesquisar</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar\n      debounce=\"500\"\n      color=\"light\"\n      (ionChange)=\"search($event)\"\n      placeholder=\"Digite sua pesquisar...\"\n    ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-list *ngIf=\"filteredProducts.length > 0\">\n          <ion-item *ngFor=\"let p of filteredProducts\">\n            <ion-thumbnail>\n              <ion-img [src]=\"p.images[0].src\" alt=\"{{ p.name }}\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h4>{{ p.name }}</h4>\n              <ion-text>\n                <p>{{ p.price | currency:\"R$\" }}</p>\n              </ion-text>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n\n        <!--SHOW THE SKELETON TEXT -->\n        <ion-list *ngIf=\"showSkeleton\">\n          <ion-item *ngFor=\"let d of [].constructor(5)\">\n            <ion-thumbnail>\n             <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h4><ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text></h4>\n              <ion-text>\n                <p><ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text></p>\n              </ion-text>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n\n\n        <!-- NO ITEMS FOUND -->\n        <ion-list *ngIf=\"filteredProducts.length<= 0 && touched\" lines=\"none\">\n          <ion-item>\n            <ion-label>\n              <h3>Nenhum produto encotrado</h3>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_search_search_module_ts-es5.js.map