'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.ContactController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@appt/core');

var _mongoose = require('@appt/mongoose');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContactController = exports.ContactController = (_dec = (0, _core.ApptComponent)({
   inject: ['ContactModel']
}), _dec(_class = function () {
   function ContactController(model) {
      _classCallCheck(this, ContactController);

      this.model = model;
   }

   _createClass(ContactController, [{
      key: 'getAll',
      value: function getAll() {
         return this.model.find({});
      }
   }, {
      key: 'getById',
      value: function getById(_id) {
         return this.model.find({ _id: _mongoose.MongooseParse.ObjectId(_id) });
      }
   }, {
      key: 'create',
      value: function create(newContact) {
         return this.model.create(newContact);
      }
   }, {
      key: 'update',
      value: function update(contact) {
         return this.model.update({
            _id: _mongoose.MongooseParse.ObjectId(contact._id)
         }, {
            $set: contact
         });
      }
   }, {
      key: 'delete',
      value: function _delete(_id) {
         return this.model.delete(req.params.id);
      }
   }]);

   return ContactController;
}()) || _class);