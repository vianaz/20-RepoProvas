"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestController = void 0;

var _TestService = require("../services/TestService");

class TestController {
  static async insertTest(req, res) {
    const {
      name,
      pdfUrl,
      category,
      teacher,
      discipline
    } = req.body;
    await _TestService.InsertTestService.insertTest(name, pdfUrl, category, teacher, discipline);
    res.sendStatus(201);
  }

  static async getByTerms(req, res) {
    const byTermsResultQuery = await _TestService.GetByTermsService.getByTerms();
    res.send(byTermsResultQuery);
  }

  static async getByTeacher(req, res) {
    const byTeacherResultQuery = await _TestService.GetByTeacherService.getByTeacher();
    res.send(byTeacherResultQuery);
  }

}

exports.TestController = TestController;