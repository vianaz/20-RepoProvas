"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindRepository = void 0;

var _QueryFactory = require("../factories/QueryFactory");

class FindRepository {
  static async findUnique(table, data) {
    const {
      query
    } = new _QueryFactory.QueryFactory(table, "findFirst");
    const result = await query(data);
    return result;
  }

  static async findMany(table, data) {
    const {
      query
    } = new _QueryFactory.QueryFactory(table, "findMany");
    const result = await query(data);
    return result;
  }

}

exports.FindRepository = FindRepository;