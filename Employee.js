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
var Cognizant;
(function (Cognizant) {
    var Employee1 = /** @class */ (function () {
        function Employee1() {
        }
        return Employee1;
    }());
    Cognizant.Employee1 = Employee1;
    var num = "hello";
    var num1 = "e";
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, age) {
            var _this = _super.call(this) || this;
            _this.Name = name;
            _this.Age = age;
            alert(num + num1);
            return _this;
        }
        Employee.prototype.getdetails = function (name) {
            alert(this.Name);
            return true;
        };
        return Employee;
    }(Employee1));
    Cognizant.Employee = Employee;
})(Cognizant || (Cognizant = {}));
