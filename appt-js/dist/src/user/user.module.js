'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.UserModule = undefined;

var _dec, _class;

var _core = require('@appt/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserModule = exports.UserModule = (_dec = (0, _core.ApptModule)({
   declare: ['UserRouter', 'UserController', 'UserModel', 'UserSchema']
}), _dec(_class = function UserModule() {
   _classCallCheck(this, UserModule);
}) || _class);