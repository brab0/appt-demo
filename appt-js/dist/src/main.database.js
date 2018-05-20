'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.MainDatabase = undefined;

var _dec, _class;

var _core = require('@appt/core');

var _mongoose = require('@appt/mongoose');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainDatabase = exports.MainDatabase = (_dec = (0, _core.ApptComponent)({
   extend: {
      type: _core.TDatabase,
      use: [_mongoose.Mongoose]
   }
}), _dec(_class = function MainDatabase(config) {
   _classCallCheck(this, MainDatabase);

   console.log('Database running at ' + config.uri);
}) || _class);