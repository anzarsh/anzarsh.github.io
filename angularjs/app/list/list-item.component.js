"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListItemComponent = (function () {
    function ListItemComponent() {
        this.codename = 0;
        this.up = new core_1.EventEmitter();
        this.down = new core_1.EventEmitter();
    }
    ListItemComponent.prototype.fup = function () {
        this.up.emit(this.codename);
    };
    ListItemComponent.prototype.fdown = function () {
        this.down.emit(this.codename);
    };
    return ListItemComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ListItemComponent.prototype, "up", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ListItemComponent.prototype, "down", void 0);
ListItemComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list-item",
        templateUrl: "list-item.component.html",
        styleUrls: ["list-item.component.css"],
        inputs: ["codename"]
    })
], ListItemComponent);
exports.ListItemComponent = ListItemComponent;
//# sourceMappingURL=list-item.component.js.map