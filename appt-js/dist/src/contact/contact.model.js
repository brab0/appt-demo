'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.ContactModel = undefined;

var _dec, _class;

var _core = require('@appt/core');

var _mongoose = require('@appt/mongoose');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContactModel = exports.ContactModel = (_dec = (0, _core.ApptComponent)({
   extend: {
      type: _mongoose.TModel,
      use: ['ContactSchema']
   }
}), _dec(_class = function ContactModel() {
   _classCallCheck(this, ContactModel);
}) || _class);