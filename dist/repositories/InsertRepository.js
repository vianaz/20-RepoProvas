"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InsertRepository = void 0;

var _QueryFactory = require("../factories/QueryFactory");

class InsertRepository {
  static async insert(table, data) {
    const {
      query
    } = new _QueryFactory.QueryFactory(table, "create");
    return await query({
      data
    });
  }

}

exports.InsertRepository = InsertRepository;