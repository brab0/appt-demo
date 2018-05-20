'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.ContactModule = undefined;

var _dec, _class;

var _core = require('@appt/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContactModule = exports.ContactModule = (_dec = (0, _core.ApptModule)({
   declare: ['ContactRouter', 'ContactController', 'ContactModel', 'ContactSchema']
}), _dec(_class = function ContactModule() {
   _classCallCheck(this, ContactModule);
}) || _class);