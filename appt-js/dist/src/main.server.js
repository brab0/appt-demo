'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.MainServer = undefined;

var _dec, _class;

var _core = require('@appt/core');

var _api = require('@appt/api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainServer = exports.MainServer = (_dec = (0, _core.ApptComponent)({
   extend: {
      type: _api.TServer
   }
}), _dec(_class = function MainServer(config) {
   _classCallCheck(this, MainServer);

   console.log('Server running at ' + config.address.host + ':' + config.address.port);
}) || _class);