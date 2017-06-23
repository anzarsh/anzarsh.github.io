"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rating_name = (function () {
    function rating_name() {
    }
    return rating_name;
}());
var ListComponent = (function () {
    function ListComponent() {
        this.list = [{ rating: 0, name: "Россия" },
            { rating: 0, name: "Германия" },
            { rating: 0, name: "Мексика" },
            { rating: 0, name: "Новая Зеландия" },
            { rating: 0, name: "Португалия" }
        ];
    }
    ListComponent.prototype.sort = function () {
        this.list.sort(function (a, b) {
            return b.rating - a.rating;
        });
    };
    ListComponent.prototype.ffup = function (num) {
        var i;
        for (i = 0; i < this.list.length; i++) {
            if (this.list[i].name === num) {
                this.list[i].rating++;
            }
        }
        this.sort();
    };
    ListComponent.prototype.ffdown = function (num) {
        var i;
        for (i = 0; i < this.list.length; i++) {
            if (this.list[i].name === num) {
                this.list[i].rating--;
            }
        }
        this.sort();
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "my-list",
        templateUrl: "list.component.html",
        styleUrls: ["list.component.css"],
    })
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map