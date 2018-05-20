"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@appt/core");
const mongoose_1 = require("@appt/mongoose");
let ApiDatabaseComponent = class ApiDatabaseComponent {
    constructor(config) {
        console.log(`Database running at ${config.host}`);
    }
};
ApiDatabaseComponent = __decorate([
    core_1.ApptComponent({
        extend: {
            type: core_1.TDatabase,
            config: {
                database: 'appt-ts'
            },
            use: [mongoose_1.Mongoose]
        }
    })
], ApiDatabaseComponent);
exports.ApiDatabaseComponent = ApiDatabaseComponent;
//# sourceMappingURL=api.database.component.js.map