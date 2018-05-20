'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.ContactRouter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2;

var _core = require('@appt/core');

var _api = require('@appt/api');

var _router = require('@appt/api/router');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
   var desc = {};
   Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
   });
   desc.enumerable = !!desc.enumerable;
   desc.configurable = !!desc.configurable;

   if ('value' in desc || desc.initializer) {
      desc.writable = true;
   }

   desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
   }, desc);

   if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
   }

   if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
   }

   return desc;
}

var ContactRouter = exports.ContactRouter = (_dec = (0, _core.ApptComponent)({
   extend: {
      type: _api.TRouter,
      config: {
         path: '/contact',
         auth: {
            secret: '87gbi2ep0f138bf1b'
         }
      }
   },
   inject: ['ContactController']
}), _dec2 = (0, _router.Get)('/'), _dec3 = (0, _router.Get)('/:id'), _dec4 = (0, _router.Post)('/'), _dec5 = (0, _router.Put)('/'), _dec6 = (0, _router.Delete)('/:id'), _dec(_class = (_class2 = function () {
   function ContactRouter(controller) {
      _classCallCheck(this, ContactRouter);

      this.controller = controller;
   }

   _createClass(ContactRouter, [{
      key: 'getAll',
      value: function getAll(req, res, next) {
         this.controller.getAll().then(function (contacts) {
            return res.status(200).send(contacts);
         }).catch(function (ex) {
            return res.status(500).send(ex);
         });
      }
   }, {
      key: 'getById',
      value: function getById(req, res, next) {
         this.controller.getById(req.params.id).then(function (contact) {
            return res.status(200).send(contact);
         }).catch(function (ex) {
            return res.status(500).send(ex);
         });
      }
   }, {
      key: 'create',
      value: function create(req, res, next) {
         this.controller.create(req.body).then(function (contact) {
            return res.status(200).send(contact);
         }).catch(function (ex) {
            return res.status(500).send(ex);
         });
      }
   }, {
      key: 'update',
      value: function update(req, res, next) {
         this.controller.update(req.body).then(function (contact) {
            return res.status(200).send(contact);
         }).catch(function (ex) {
            return res.status(500).send(ex);
         });
      }
   }, {
      key: 'delete',
      value: function _delete(req, res, next) {
         this.controller.delete(req.params.id).then(function (contact) {
            return res.status(200).send(contact);
         }).catch(function (ex) {
            return res.status(500).send(ex);
         });
      }
   }]);

   return ContactRouter;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'getAll', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'getAll'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getById', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'getById'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'create', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'create'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'update', [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'update'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'delete', [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'delete'), _class2.prototype)), _class2)) || _class);