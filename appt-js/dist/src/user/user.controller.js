'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.UserController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@appt/core');

var _mongoose = require('@appt/mongoose');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = exports.UserController = (_dec = (0, _core.ApptComponent)({
   inject: ['UserModel']
}), _dec(_class = function () {
   function UserController(model) {
      _classCallCheck(this, UserController);

      this.model = model;
   }

   _createClass(UserController, [{
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
      value: function create(newUser) {
         return this.model.create(newUser);
      }
   }, {
      key: 'update',
      value: function update(user) {
         return this.model.update({
            _id: _mongoose.MongooseParse.ObjectId(user._id)
         }, {
            $set: user
         });
      }
   }, {
      key: 'delete',
      value: function _delete(_id) {
         return this.model.delete(req.params.id);
      }
   }]);

   return UserController;
}()) || _class);