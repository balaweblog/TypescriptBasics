"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.validate = function (input) {
        this.age = input;
        if (input > 10) {
            throw "exeption nae is required";
        }
        alert(input + 'i am in validate function');
        return true;
    };
    return Customer;
}());
exports.Customer = Customer;
var NewCustomer = /** @class */ (function (_super) {
    __extends(NewCustomer, _super);
    function NewCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewCustomer.prototype.validate = function (input) {
        alert(input + 'new boy');
        return true;
    };
    return NewCustomer;
}(Customer));
