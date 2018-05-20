'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.UserSchema = undefined;

var _dec, _class;

var _core = require('@appt/core');

var _mongoose = require('@appt/mongoose');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserSchema = exports.UserSchema = (_dec = (0, _core.ApptComponent)({
   extend: {
      type: _mongoose.TSchema
   }
}), _dec(_class = function UserSchema() {
   _classCallCheck(this, UserSchema);

   this.name = {
      type: String,
      default: ""
   };

   this.email = {
      type: String,
      default: ""
   };
}) || _class);