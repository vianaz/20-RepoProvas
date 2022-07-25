"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupByRepository = void 0;

var _database = _interopRequireDefault(require("../db/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GroupByRepository {
  static async groupByTerms() {
    const result = await _database.default.terms.findMany({
      where: {},
      select: {
        id: true,
        disciplines: {
          select: {
            id: true,
            name: true,
            teacherDisciplines: {
              select: {
                id: true,
                teachers: {
                  select: {
                    id: true,
                    name: true
                  }
                },
                tests: {
                  select: {
                    id: true,
                    categories: {
                      select: {
                        id: true,
                        name: true,
                        tests: {
                          select: {
                            id: true,
                            name: true,
                            pdfUrl: true
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
    return result;
  }

  static async groupByTeacher() {
    const result = await _database.default.teacherDisciplines.findMany({
      select: {
        id: true,
        teachers: {
          select: {
            name: true
          }
        },
        disciplines: {
          select: {
            name: true
          }
        },
        tests: {
          select: {
            id: true,
            name: true,
            pdfUrl: true
          }
        }
      }
    });
    return result;
  }

}

exports.GroupByRepository = GroupByRepository;