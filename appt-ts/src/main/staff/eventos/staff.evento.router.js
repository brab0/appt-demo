"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@appt/core");
const api_1 = require("@appt/api");
const router_1 = require("@appt/api/router");
let StaffEventoRouter = class StaffEventoRouter {
    constructor(staffEventoController) {
        this.staffEventoController = staffEventoController;
    }
    getAll(req, res) {
        this.staffEventoController.getAll()
            .then(data => res.status(200).send(data));
    }
    getById(req, res) {
        this.staffEventoController.getById(req.params.id)
            .then(data => res.status(200).send(data));
    }
};
__decorate([
    router_1.Get('/')
], StaffEventoRouter.prototype, "getAll", null);
__decorate([
    router_1.Get('/:id')
], StaffEventoRouter.prototype, "getById", null);
StaffEventoRouter = __decorate([
    core_1.ApptComponent({
        extend: {
            type: api_1.TRouter,
            config: {
                path: '/evento'
            }
        },
        inject: [
            'StaffEventoController'
        ]
    })
], StaffEventoRouter);
exports.StaffEventoRouter = StaffEventoRouter;
//# sourceMappingURL=staff.evento.router.js.map