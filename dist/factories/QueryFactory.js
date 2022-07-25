"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryFactory = void 0;

var _database = _interopRequireDefault(require("../db/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class QueryFactory {
  constructor(table, type) {
    this.query = _database.default[table][type];
  }

}

exports.QueryFactory = QueryFactory;