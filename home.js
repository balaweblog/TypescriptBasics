var Root;
(function (Root) {
    var Home = /** @class */ (function () {
        function Home(entry, location) {
            this.entry = entry;
            this.location = location;
        }
        Object.defineProperty(Home.prototype, "Entry", {
            get: function () {
                return this.entry;
            },
            set: function (entry) {
                this.entry = entry;
            },
            enumerable: true,
            configurable: true
        });
        Home.prototype.Enter = function () {
            console.log("I am enter", this.entry);
        };
        Home.prototype.Exit = function () {
            console.log("I am exit", this.location);
        };
        return Home;
    }());
    Root.Home = Home;
    var Apartment = /** @class */ (function () {
        function Apartment(home) {
            this.home = home;
        }
        Apartment.prototype.gethome = function () {
            return this.home;
        };
        return Apartment;
    }());
    Root.Apartment = Apartment;
})(Root || (Root = {}));
