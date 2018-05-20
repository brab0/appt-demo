'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.MainModule = undefined;

var _dec, _class;

var _core = require('@appt/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainModule = exports.MainModule = (_dec = (0, _core.ApptModule)({
   import: ['ContactModule', 'UserModule'],
   declare: ['MainDatabase', 'MainRouter', 'MainServer']
}), _dec(_class = function MainModule() {
   _classCallCheck(this, MainModule);
}) || _class);


_core.ApptBootstrap.module('MainModule');