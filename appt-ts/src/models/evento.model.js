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
let EventoModel = class EventoModel {
    static getAll() {
        return this.create({
            nome: 'Rodrigo',
            sobrenome: 'Brabo'
        });
    }
    static getById(id) {
        return this.findOne({
            _id: id
        });
    }
};
EventoModel = __decorate([
    core_1.ApptComponent({
        extend: {
            type: mongoose_1.TModel,
            use: ['EventoSchema']
        }
    })
], EventoModel);
exports.EventoModel = EventoModel;
//# sourceMappingURL=evento.model.js.map