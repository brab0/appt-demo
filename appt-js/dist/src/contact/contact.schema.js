'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.ContactSchema = undefined;

var _dec, _class;

var _core = require('@appt/core');

var _mongoose = require('@appt/mongoose');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContactSchema = exports.ContactSchema = (_dec = (0, _core.ApptComponent)({
   extend: {
      type: _mongoose.TSchema
   }
}), _dec(_class = function ContactSchema() {
   _classCallCheck(this, ContactSchema);

   this.name = {
      type: String,
      default: ""
   };

   this.email = {
      type: String,
      default: ""
   };
}) || _class);