(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkVestApp_Marketplace"] = self["webpackChunkVestApp_Marketplace"] || []).push([["src_app_tab3_tab3_module_ts"], {
    /***/
    82330:
    /*!*************************************************************!*\
      !*** ./src/app/Components/cart-view/cart-view.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartViewComponent": function CartViewComponent() {
          return (
            /* binding */
            _CartViewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_cart_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cart-view.component.html */
      58145);
      /* harmony import */


      var _cart_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cart-view.component.scss */
      41966);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/cart.service */
      90910);

      var _CartViewComponent = /*#__PURE__*/function () {
        function CartViewComponent(cartService) {
          _classCallCheck(this, CartViewComponent);

          this.cartService = cartService;
          this.productsInCart = [];
        }

        _createClass(CartViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateQuantity",
          value: function updateQuantity(p, ev, index) {
            var updatedInCartValue = ev.target.value;
            this.cartService.updateQuantity(index, updatedInCartValue);
          }
        }, {
          key: "removeItemFromCart",
          value: function removeItemFromCart(prod) {
            this.productsInCart = this.cartService.removeFromCart(prod);
          }
        }]);

        return CartViewComponent;
      }();

      _CartViewComponent.ctorParameters = function () {
        return [{
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService
        }];
      };

      _CartViewComponent.propDecorators = {
        productsInCart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['prod']
        }]
      };
      _CartViewComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cart-view',
        template: _raw_loader_cart_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cart_view_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CartViewComponent);
      /***/
    },

    /***/
    99818:
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab3PageRoutingModule": function Tab3PageRoutingModule() {
          return (
            /* binding */
            _Tab3PageRoutingModule
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


      var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab3.page */
      78592);

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page
      }];

      var _Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      _Tab3PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.CUSTOM_ELEMENTS_SCHEMA]
      })], _Tab3PageRoutingModule);
      /***/
    },

    /***/
    53746:
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab3PageModule": function Tab3PageModule() {
          return (
            /* binding */
            _Tab3PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab3.page */
      78592);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab3-routing.module */
      99818);
      /* harmony import */


      var _Components_cart_view_cart_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Components/cart-view/cart-view.component */
      82330);

      var _Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      _Tab3PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page, _Components_cart_view_cart_view_component__WEBPACK_IMPORTED_MODULE_3__.CartViewComponent]
      })], _Tab3PageModule);
      /***/
    },

    /***/
    78592:
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab3Page": function Tab3Page() {
          return (
            /* binding */
            _Tab3Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab3.page.html */
      64255);
      /* harmony import */


      var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab3.page.scss */
      90943);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/cart.service */
      90910);

      var _Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(cartService) {
          _classCallCheck(this, Tab3Page);

          this.cartService = cartService;
        }

        _createClass(Tab3Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.cartService.cartData.subscribe(function (data) {
              _this.cart = data;
            });
            this.cartService.cartTotal.subscribe(function (total) {
              return _this.total = total;
            });
          }
        }]);

        return Tab3Page;
      }();

      _Tab3Page.ctorParameters = function () {
        return [{
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService
        }];
      };

      _Tab3Page = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab3Page);
      /***/
    },

    /***/
    41966:
    /*!***************************************************************!*\
      !*** ./src/app/Components/cart-view/cart-view.component.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.price {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.price-inner {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.price-inner h3 {\n  font-size: 18px !important;\n}\n\n.border-light-updated {\n  border: 1px solid #e7e2e2;\n  padding: 0 10px;\n}\n\nion-card:last-of-type {\n  margin-bottom: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQUk7RUFDRSwwQkFBQTtBQUVOOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQkFBQTtBQUNKIiwiZmlsZSI6ImNhcnQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICM4YzhjOGM7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgLnByaWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLnByaWNlLWlubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxOHB4IWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgXG4gIC5ib3JkZXItbGlnaHQtdXBkYXRlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTJlMjtcbiAgICBwYWRkaW5nOjAgMTBweDtcbiAgfVxuICBcbiAgaW9uLWNhcmQ6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    90943:
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".totalPrice {\n  font-size: 30px;\n  padding-left: 20px;\n}\n\n.shop-button {\n  display: flex;\n  justify-content: center;\n}\n\nion-badge {\n  margin-right: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG90YWxQcmljZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxuICBcbiAgLnNob3AtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gXG5pb24tYmFkZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG4gICJdfQ== */";
      /***/
    },

    /***/
    58145:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/cart-view/cart-view.component.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"container\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card *ngFor=\"let p of productsInCart; index as i\">\n            <ion-card-header>\n              <ion-card-title class=\"ion-text-left\">\n                {{ p.name }}\n              </ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-item lines=\"none\">\n                <ion-thumbnail slot=\"end\" style=\"width:120px; height: auto;\">\n                  <ion-img [src]=\"p.images[0].src\" style=\"width:120px; height: auto;\"></ion-img>\n                </ion-thumbnail>\n              </ion-item>\n              <ion-item lines=\"none\">\n                <ion-label class=\"price\">\n                  <ion-text class=\"price-inner\">\n                    <h3>{{ p.price | currency:'R$'}}</h3>&nbsp;&nbsp;\n                  </ion-text>\n                </ion-label>\n                <ion-label class=\"d-flex align-items-center border border-light-updated\">\n                  <ion-text>Quantidade: </ion-text><ion-select slot=\"end\" value=\"{{ p.in_cart }}\" (ionChange)=\"updateQuantity(p, $event, i)\">\n                  <ion-select-option value=\"1\">1</ion-select-option>\n                  <ion-select-option value=\"2\">2</ion-select-option>\n                  <ion-select-option value=\"3\">3</ion-select-option>\n                  <ion-select-option value=\"4\">4</ion-select-option>\n                  <ion-select-option value=\"5\">5</ion-select-option>\n                </ion-select>\n                </ion-label>\n              </ion-item>\n              <ion-item-divider></ion-item-divider>\n              <ion-button (click)=\"removeItemFromCart(p)\" color=\"dark\">Remover Produtos</ion-button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>";
      /***/
    },

    /***/
    64255:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--HEADER SECTION-->\n\n<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Carrinho de Compras\n        </ion-title>\n        <ion-badge color=\"light\" slot=\"end\">{{ cart.count || 0 }}</ion-badge>\n    </ion-toolbar>\n</ion-header>\n<!--END OF HEADER SECTION-->\n\n<!--CONTENT SECTION-->\n<ion-content [fullscreen]=\"true\">\n    <ng-container *ngIf=\"cart.productData.length > 0; else showOther\">\n        <ion-header collapse=\"condense\">\n            <ion-toolbar>\n                <ion-title size=\"large\">Tab 3</ion-title>\n            </ion-toolbar>\n        </ion-header>\n        <app-cart-view [prod]=\"cart.productData\"></app-cart-view>\n    </ng-container>\n\n    <ng-template #showOther>\n        <ion-img src=\"/assets/cart.png\"></ion-img>\n        <div class=\"shop-button\">\n            <ion-button color=\"dark\" class=\"ion-text-center\" routerLink=\"/tabs/tab1\" size=\"large\">Voltar para Loja</ion-button>\n        </div>\n    </ng-template>\n</ion-content>\n<!--END OF CONTENT SECTION-->\n\n    <ion-footer>\n        <ion-toolbar *ngIf=\"cart.productData.length > 0\">\n            <ion-label slot=\"start\">\n                <ion-text class=\"totalPrice\">{{ total |currency:\"R$\" }}\n                    <ion-note>({{ cart.count }} items)</ion-note>\n                </ion-text>\n            </ion-label>\n            <ion-buttons slot=\"end\">\n                <ion-button\n                        class=\"ion-activatable ripple-parent\"\n                        color=\"dark\"\n                        expand=\"full\"\n                        fill=\"solid\"\n                        size=\"large\"\n                        routerLink=\"/checkout\"\n                >Pagamento\n                    <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n                </ion-button>\n            </ion-buttons>\n        </ion-toolbar>\n    </ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab3_tab3_module_ts-es5.js.map