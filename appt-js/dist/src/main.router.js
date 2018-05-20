'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.MainRouter = undefined;

var _dec, _class;

var _core = require('@appt/core');

var _api = require('@appt/api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainRouter = exports.MainRouter = (_dec = (0, _core.ApptComponent)({
   extend: {
      type: _api.TRouter,
      config: {
         path: '/api'
      },
      use: ['ContactRouter', 'UserRouter']
   }
}), _dec(_class = function MainRouter() {
   _classCallCheck(this, MainRouter);
}) || _class);