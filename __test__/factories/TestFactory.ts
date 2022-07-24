import { faker } from "@faker-js/faker";

const insertTestObject = {
  empty_field: {},
  insert_test: {
    name: faker.name.firstName(),
    pdfUrl: faker.image.imageUrl(),
    category: "Projeto",
    teacher: "Diego Pinho",
    discipline: "JavaScript",
  },
};

type InsertTestTypes = keyof typeof insertTestObject;

export class TestFactory {
  static createInsertTest(type: InsertTestTypes) {
    return insertTestObject[type];
  }
}
