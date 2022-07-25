"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InsertTestService = exports.GetByTermsService = exports.GetByTeacherService = void 0;

var _ErrorFactory = require("../factories/ErrorFactory");

var _FindRepository = require("../repositories/FindRepository");

var _GroupByRepository = require("../repositories/GroupByRepository");

var _InsertRepository = require("../repositories/InsertRepository");

class InsertTestService {
  static async insertTest(name, pdfUrl, categoryName, teacherName, disciplineName) {
    const {
      id: categoryId
    } = await this.getDataIdByName("Categories", categoryName);
    const {
      id: teacherId
    } = await this.getDataIdByName("Teachers", teacherName);
    const {
      id: disciplineId
    } = await this.getDataIdByName("Disciplines", disciplineName);
    const {
      id: teacherDisciplineId
    } = await this.getTeacherDisciplineId("TeacherDisciplines", teacherId, disciplineId);
    const formatInsertData = {
      name,
      pdfUrl,
      categoryId,
      teacherDisciplineId
    };
    await _InsertRepository.InsertRepository.insert("Tests", formatInsertData);
  }

  static async getDataIdByName(table, name) {
    const data = await _FindRepository.FindRepository.findUnique(table, {
      where: {
        name
      }
    });

    if (!data) {
      throw new _ErrorFactory.ErrorFactory("error_category_not_found").error;
    }

    return {
      id: data.id
    };
  }

  static async getTeacherDisciplineId(table, teacherId, disciplineId) {
    const data = await _FindRepository.FindRepository.findUnique(table, {
      where: {
        teacherId,
        disciplineId
      }
    });

    if (!data) {
      throw new _ErrorFactory.ErrorFactory("error_category_not_found").error;
    }

    return {
      id: data.id
    };
  }

}

exports.InsertTestService = InsertTestService;

class GetByTermsService {
  static async getByTerms() {
    const byTerms = await _GroupByRepository.GroupByRepository.groupByTerms();
    return byTerms;
  }

}

exports.GetByTermsService = GetByTermsService;

class GetByTeacherService {
  static async getByTeacher() {
    const byTeacher = await _GroupByRepository.GroupByRepository.groupByTeacher();
    return byTeacher;
  }

}

exports.GetByTeacherService = GetByTeacherService;