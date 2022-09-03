(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkVestApp_Marketplace"] = self["webpackChunkVestApp_Marketplace"] || []).push([["src_app_pages_checkout_checkout_module_ts"], {
    /***/
    83303:
    /*!***********************************************************!*\
      !*** ./src/app/pages/checkout/checkout-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckoutPageRoutingModule": function CheckoutPageRoutingModule() {
          return (
            /* binding */
            _CheckoutPageRoutingModule
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


      var _checkout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./checkout.page */
      94300);

      var routes = [{
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_0__.CheckoutPage
      }];

      var _CheckoutPageRoutingModule = function CheckoutPageRoutingModule() {
        _classCallCheck(this, CheckoutPageRoutingModule);
      };

      _CheckoutPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CheckoutPageRoutingModule);
      /***/
    },

    /***/
    98810:
    /*!***************************************************!*\
      !*** ./src/app/pages/checkout/checkout.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckoutPageModule": function CheckoutPageModule() {
          return (
            /* binding */
            _CheckoutPageModule
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


      var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./checkout-routing.module */
      83303);
      /* harmony import */


      var _checkout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./checkout.page */
      94300);

      var _CheckoutPageModule = function CheckoutPageModule() {
        _classCallCheck(this, CheckoutPageModule);
      };

      _CheckoutPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutPageRoutingModule],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_1__.CheckoutPage]
      })], _CheckoutPageModule);
      /***/
    },

    /***/
    94300:
    /*!*************************************************!*\
      !*** ./src/app/pages/checkout/checkout.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckoutPage": function CheckoutPage() {
          return (
            /* binding */
            _CheckoutPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./checkout.page.html */
      43394);
      /* harmony import */


      var _checkout_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./checkout.page.scss */
      61069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/cart.service */
      90910);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage-angular */
      61628);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      92340);

      var _CheckoutPage = /*#__PURE__*/function () {
        function CheckoutPage(cartService, storage) {
          _classCallCheck(this, CheckoutPage);

          this.cartService = cartService;
          this.storage = storage;
          this.paymentGateway = [];
          this.subTotal = 0;
          this.cartTotal = 0;
          this.products = [];
          this.BrazilianStates = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.states;
          this.finalTax = 0;
          this.math = Math;
        }

        _createClass(CheckoutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isPersonalUp = false;
                      this.isBillingUp = false;
                      this.isShippingUp = false;
                      this.isPaymentUp = false;
                      this.sameShipping = true;
                      this.cartService.getAllPaymentGateways().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (pg) {
                        return pg.filter(function (p) {
                          return p.enabled === true;
                        });
                      })).subscribe(function (pg) {
                        _this.paymentGateway = pg;
                        console.log(_this.paymentGateway);
                      });
                      this.cartService.cartData.subscribe(function (data) {
                        return _this.products = data.productData;
                      });
                      this.cartService.cartTotal.subscribe(function (total) {
                        return _this.cartTotal = total;
                      });
                      this.storage.get('user').then(function (userData) {
                        return _this.userDetails = userData;
                      });
                      this.cartService.getTaxes().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (taxes) {
                        return taxes.map(function (t) {
                          return t.rate;
                        });
                      })).subscribe(function (data) {
                        var taxRate; // @ts-ignore

                        taxRate = parseInt(data, 10);
                        _this.taxesRate = taxRate;
                        _this.subTotal = _this.cartTotal;
                        var taxCalculation = _this.taxesRate * _this.subTotal / 100;

                        if (taxCalculation < 1) {
                          taxCalculation = 1;
                          _this.finalTax = taxCalculation;
                        } else {
                          _this.finalTax = Math.floor(Math.abs(_this.taxesRate * _this.subTotal / 100));
                        }

                        _this.cartTotal = _this.subTotal + _this.finalTax;
                      }, function (err) {
                        return console.error(err);
                      });

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "toggleUp",
          value: function toggleUp(section) {
            switch (section) {
              case 'billing':
                this.isBillingUp = !this.isBillingUp;
                break;

              case 'shipping':
                this.isShippingUp = !this.isShippingUp;
                break;

              case 'payment':
                this.isPaymentUp = !this.isPaymentUp;
                break;

              default:
                this.isPersonalUp = !this.isPersonalUp;
                break;
            }
          }
        }, {
          key: "toggleShipping",
          value: function toggleShipping() {
            this.sameShipping = !this.sameShipping;
          }
        }, {
          key: "checkout",
          value: function checkout(checkoutForm) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var data, user, lineItems, formData;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      data = checkoutForm.value;
                      _context2.next = 3;
                      return this.storage.get('user');

                    case 3:
                      user = _context2.sent;
                      lineItems = [];
                      this.products.forEach(function (p) {
                        lineItems.push({
                          product_id: p.id,
                          quantity: parseInt(String(p.in_cart), 10)
                        });
                      });
                      formData = null;

                      if (this.sameShipping) {
                        formData = {
                          set_paid: true,
                          payment_method: this.paymentGateway[0].id,
                          payment_method_title: this.paymentGateway[0].method_title,
                          customer_id: 0,
                          billing: {
                            address_1: data.b_address_line_1,
                            address_2: data.b_address_line_2,
                            city: data.b_city,
                            state: data.b_state,
                            country: 'BR',
                            postcode: data.b_postcode,
                            first_name: data.first_name,
                            last_name: data.last_name,
                            email: data.email,
                            phone: data.phone
                          },
                          shipping: {
                            address_1: data.b_address_line_1,
                            address_2: data.b_address_line_2,
                            city: data.b_city,
                            state: data.b_state,
                            country: 'BR',
                            postcode: data.b_postcode,
                            first_name: data.first_name,
                            last_name: data.last_name
                          },
                          line_items: lineItems
                        };
                      } else {
                        formData = {
                          set_paid: true,
                          payment_method: this.paymentGateway[0].id,
                          payment_method_title: this.paymentGateway[0].method_title,
                          customer_id: 0,
                          billing: {
                            address_1: data.b_address_line_1,
                            address_2: data.b_address_line_2,
                            city: data.b_city,
                            state: data.b_state,
                            country: 'BR',
                            postcode: data.b_postcode,
                            first_name: data.first_name,
                            last_name: data.last_name,
                            email: data.email,
                            phone: data.phone
                          },
                          shipping: {
                            address_1: data.s_address_line_1,
                            address_2: data.s_address_line_2,
                            city: data.s_city,
                            state: data.s_state,
                            country: 'BR',
                            postcode: data.s_postcode,
                            first_name: data.first_name,
                            last_name: data.last_name
                          },
                          line_items: lineItems
                        };
                      } // @ts-ignore


                      this.cartService.createOrder(formData).then();

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return CheckoutPage;
      }();

      _CheckoutPage.ctorParameters = function () {
        return [{
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__.Storage
        }];
      };

      _CheckoutPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-checkout',
        template: _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_checkout_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CheckoutPage);
      /***/
    },

    /***/
    61069:
    /*!***************************************************!*\
      !*** ./src/app/pages/checkout/checkout.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    43394:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-button routerLink=\"/tabs/tab3\">\n        <ion-icon name=\"arrow-back-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-left\">Finalizar Compra</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <form #checkoutForm=\"ngForm\">\n    <ion-grid>\n      <!-- Personal Details-->\n      <ion-row>\n        <ion-col>\n          <ion-list lines=\"full\">\n            <ion-list-header color=\"dark\" lines=\"full\" slot=\"start\">\n              <ion-label (click)=\"toggleUp('personal')\"\n                         class=\"d-flex justify-content-between align-items-center\"\n                         data-target=\"#personalDetails\" data-toggle=\"collapse\">\n                <h2 class=\"ion-color-tertiary\" style=\"color: #e5e5e5;\">Detalhes do Cliente</h2>\n                <ion-icon (click)=\"toggleUp('personal')\" *ngIf=\"!isPersonalUp\"\n                          class=\"justify-self-start\"\n                          data-target=\"#personalDetails\" data-toggle=\"collapse\"\n                          name=\"chevron-down-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #e5e5e5;\"></ion-icon>\n                <ion-icon (click)=\"toggleUp('personal')\" *ngIf=\"isPersonalUp\" class=\"justify-self-start\"\n                          data-target=\"#personalDetails\" data-toggle=\"collapse\"\n                          name=\"chevron-up-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #e5e5e5;\"></ion-icon>\n              </ion-label>\n            </ion-list-header>\n            <div class=\"collapse\" id=\"personalDetails\">\n              <ion-item>\n                <ion-label position=\"floating\">Nome</ion-label>\n                <ion-input #fname=\"ngModel\" name=\"first_name\" ngModel required type=\"text\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Sobrenome</ion-label>\n                <ion-input #lname=\"ngModel\" name=\"last_name\" ngModel required type=\"text\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"floating\">E-mail</ion-label>\n                <ion-input #email=\"ngModel\" name=\"email\" ngModel required type=\"email\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"floating\">Telefone</ion-label>\n                <ion-input #phone=\"ngModel\" name=\"phone\" ngModel required type=\"text\"></ion-input>\n              </ion-item>\n            </div>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <!-- Billing Details-->\n      <ion-row>\n        <ion-col>\n          <ion-list lines=\"full\">\n            <ion-list-header color=\"dark\" lines=\"full\" slot=\"start\">\n              <ion-label (click)=\"toggleUp('billing')\"\n                         class=\"d-flex justify-content-between align-items-center\"\n                         data-target=\"#billingDetails\" data-toggle=\"collapse\">\n                <h2 class=\"ion-color-tertiary\" style=\"color: #fff;\">Endereço de Cobrança</h2>\n                <ion-icon (click)=\"toggleUp('billing')\" *ngIf=\"!isBillingUp\" class=\"justify-self-start\"\n                          data-target=\"#billingDetails\" data-toggle=\"collapse\"\n                          name=\"chevron-down-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #fff;\"></ion-icon>\n                <ion-icon (click)=\"toggleUp('billing')\" *ngIf=\"isBillingUp\" class=\"justify-self-start\"\n                          data-target=\"#billingDetails\" data-toggle=\"collapse\"\n                          name=\"chevron-up-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #fff;\"></ion-icon>\n              </ion-label>\n            </ion-list-header>\n\n\n            <ion-item class=\"collapse\" id=\"billingDetails\">\n              <ion-label position=\"stacked\">Endereço</ion-label>\n              <ion-input #b_address_line_1=\"ngModel\" name=\"b_address_line_1\" ngModel required\n                         type=\"text\"></ion-input>\n              <ion-label position=\"stacked\">Complemento</ion-label>\n              <ion-input #b_address_line_2=\"ngModel\" name=\"b_address_line_2\" ngModel\n                         type=\"text\"></ion-input>\n              <ion-label position=\"stacked\">Cidade</ion-label>\n              <ion-input #b_city=\"ngModel\" name=\"b_city\" ngModel required\n                         type=\"text\"></ion-input>\n              <ion-label position=\"stacked\">Estado</ion-label>\n              <ion-select #b_state=\"ngModel\" name=\"b_state\" ngModel placeholder=\"Selecione o estado\"  required>\n                <ion-select-option *ngFor=\"let s of BrazilianStates; index as i\"\n                                   [value]=\"s.value\">{{ s.name }}</ion-select-option>\n              </ion-select>\n              <ion-label position=\"stacked\">CEP</ion-label>\n              <ion-input #b_postcode=\"ngModel\" name=\"b_postcode\" ngModel required\n                         type=\"text\"></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <!-- Checkbox-->\n      <ion-row>\n        <ion-col>\n          <ion-item style=\"border: 1px solid lightgray;\">\n            <ion-checkbox (ionChange)=\"toggleShipping()\" [checked]=\"sameShipping\" color=\"dark\"\n                          slot=\"start\"></ion-checkbox>\n            <ion-label>Entregar no endereço de cobrança</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Shipping Details-->\n      <ion-row *ngIf=\"!sameShipping\">\n        <ion-col>\n          <ion-list lines=\"full\">\n            <ion-list-header color=\"dark\" lines=\"full\" slot=\"start\">\n              <ion-label (click)=\"toggleUp('shipping')\"\n                         class=\"d-flex justify-content-between align-items-center\"\n                         data-target=\"#shippingDetails\" data-toggle=\"collapse\">\n                <h2 class=\"ion-color-tertiary\" style=\"color: #350303;\">Endereço de Entrega</h2>\n                <ion-icon (click)=\"toggleUp('shipping')\" *ngIf=\"!isShippingUp\"\n                          class=\"justify-self-start\"\n                          data-target=\"#shippingDetails\" data-toggle=\"collapse\"\n                          name=\"chevron-down-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #3f1ce0;\"></ion-icon>\n                <ion-icon (click)=\"toggleUp('shipping')\" *ngIf=\"isShippingUp\" class=\"justify-self-start\"\n                          data-target=\"#shippingDetails\"\n                          data-toggle=\"collapse\" name=\"chevron-up-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #3f1ce0;\"></ion-icon>\n              </ion-label>\n            </ion-list-header>\n\n\n            <ion-item class=\"collapse\" id=\"shippingDetails\">\n              <ion-label position=\"stacked\">Endereço</ion-label>\n              <ion-input #s_address_line_1=\"ngModel\" name=\"s_address_line_1\" ngModel required\n                         type=\"text\"></ion-input>\n              <ion-label position=\"stacked\">Complemento</ion-label>\n              <ion-input #s_address_line_2=\"ngModel\" name=\"s_address_line_2\" ngModel\n                         type=\"text\"></ion-input>\n              <ion-label position=\"stacked\">Cidade</ion-label>\n              <ion-input #s_city=\"ngModel\" name=\"s_city\" ngModel required\n                         type=\"text\"></ion-input>\n\n              <ion-select #s_state=\"ngModel\" name=\"s_state\" ngModel placeholder=\"Selecione o estado\" required>\n                <ion-select-option *ngFor=\"let s of BrazilianStates; index as i\"\n                                   [value]=\"s.value\">{{ s.name }}</ion-select-option>\n              </ion-select>\n              <ion-label position=\"stacked\">CEP</ion-label>\n              <ion-input #s_postcode=\"ngModel\" name=\"s_postcode\" ngModel required\n                         type=\"text\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n  <ion-grid>\n    <!-- Payment Details-->\n    <ion-row>\n      <ion-col>\n        <ion-list *ngIf=\"paymentGateway.length > 0\" lines=\"full\">\n          <ion-list-header color=\"dark\" lines=\"full\" slot=\"start\">\n            <ion-label (click)=\"toggleUp('payment')\"\n                       class=\"d-flex justify-content-between align-items-center\"\n                       data-target=\"#paymentDetails\" data-toggle=\"collapse\">\n              <h2 class=\"ion-color-tertiary\" style=\"color: #f0f1dd;\">Opções de Pagamento </h2>\n              <ion-icon (click)=\"toggleUp('payment')\" *ngIf=\"!isShippingUp\" class=\"justify-self-start\"\n                        data-target=\"#shippingDetails\" data-toggle=\"collapse\"\n                        name=\"chevron-down-outline\"\n                        size=\"medium\" slot=\"icon-only\" style=\"color: #f0f1dd;\"></ion-icon>\n              <ion-icon (click)=\"toggleUp('payment')\" *ngIf=\"isShippingUp\" class=\"justify-self-start\"\n                        data-target=\"#shippingDetails\"\n                        data-toggle=\"collapse\" name=\"chevron-up-outline\"\n                        size=\"medium\" slot=\"icon-only\" style=\"color: #f0f1dd;\"></ion-icon>\n            </ion-label>\n          </ion-list-header>\n        </ion-list>\n        <ion-item class=\"collapse\" id=\"paymentDetails\">\n          <ion-checkbox checked\n                        color=\"dark\"\n                        readonly\n                        slot=\"start\"></ion-checkbox>              \n          <ion-label>\n              {{ paymentGateway[0]?.title | uppercase}}\n              <p>{{ paymentGateway[0]?.description}}</p> \n              \n          </ion-label>     \n        </ion-item>\n      </ion-col>\n      <ion-col *ngIf=\"paymentGateway\" class=\"d-flex justify-content-center\">\n       <!-- <ion-spinner color=\"dark\" name=\"dots\" size=\"large\"></ion-spinner>-->\n      </ion-col>\n    </ion-row>\n\n\n    <!-- ORDER SUMMARY -->\n    <ion-row>\n      <ion-col>\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-card-header color=\"medium\">\n            <ion-card-title>Resumo do Pedido</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines=\"none\">\n              <ion-item>\n                <ion-label slot=\"start\" routerLink=\"/tabs/tab3\">\n                  SubTotal ({{(cartService.cartData | async).count }})\n                </ion-label>\n                <ion-label slot=\"end\">\n                  <ion-spinner name=\"bubbles\" *ngIf=\"!subTotal\"></ion-spinner>\n                  <ion-text *ngIf=\"subTotal\">{{ subTotal | currency: 'R$' }}</ion-text>\n                </ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label slot=\"start\">\n                  Entrega\n                </ion-label>\n                <ion-label slot=\"end\">\n                  <ion-text>Frete Grátis</ion-text>\n                </ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label slot=\"start\">\n                  Taxas\n                </ion-label>\n                <ion-label slot=\"end\">\n                  <ion-spinner name=\"bubbles\" *ngIf=\"!finalTax\"></ion-spinner>\n                  <ion-text *ngIf=\"finalTax\">{{ finalTax|currency:'R$'}}</ion-text>\n                </ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label slot=\"start\">\n                  Total\n                </ion-label>\n                <ion-label slot=\"end\">\n                  <ion-text>{{ cartTotal | currency: 'R$'}}</ion-text>\n                </ion-label>\n              </ion-item>\n\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <!--SUBMIT BUTTON-->\n  <ion-row>\n    <ion-col>\n      <ion-button (click)=\"checkout(checkoutForm)\"\n                  [disabled]=\"checkoutForm.invalid || checkoutForm.pending\"\n                  color=\"dark\"\n                  expand=\"full\"\n                  fill=\"solid\"\n                  size=\"large\"\n                  type=\"submit\"\n      >Finalizar Compra\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_checkout_checkout_module_ts-es5.js.map