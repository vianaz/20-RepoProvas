import { faker } from "@faker-js/faker";

const insertTestObject = {
  empty_field: {},
  insert_test: {
    name: "Teste Super Supimpa",
    pdfUrl: faker.image.imageUrl(),
    category: "Projeto",
    teacher: "Diego Pinho",
    discipline: "JavaScript",
  },
  insert_test_category_wrong: {
    name: "Teste Super Supimpa",
    pdfUrl: faker.image.imageUrl(),
    category: "Projeto Supimpa",
    teacher: "Diego Pinho",
    discipline: "JavaScript",
  },
  insert_test_discipline_wrong: {
    name: "Teste Super Supimpa",
    pdfUrl: faker.image.imageUrl(),
    category: "Projeto",
    teacher: "Diego Pinho",
    discipline: "JavaScript Supimpa",
  },
  insert_test_teacher_wrong: {
    name: "Teste Super Supimpa",
    pdfUrl: faker.image.imageUrl(),
    category: "Projeto",
    teacher: "Diego Pinho Supimpa",
    discipline: "JavaScript",
  },
};

type InsertTestTypes = keyof typeof insertTestObject;

export class TestFactory {
  static createInsertTest(type: InsertTestTypes) {
    return insertTestObject[type];
  }
}
