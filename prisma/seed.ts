import {
  Categories,
  Disciplines,
  PrismaClient,
  TeacherDisciplines,
  Teachers,
  Terms,
  Users,
} from "@prisma/client";
import { BcryptUtils } from "../src/utils/BcryptUtils";

const prisma = new PrismaClient();

const main = async () => {
  const { encrypt } = BcryptUtils;
  const user: Omit<Users, "id"> = {
    email: "gabriel@gabriel.com",
    password: await encrypt("123456"),
  };
  const terms: Omit<Terms, "id">[] = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
  ];
  const categories: Omit<Categories, "id">[] = [
    { name: "Projeto" },
    { name: "Prática" },
    { name: "Recuperação" },
  ];
  const teachers: Omit<Teachers, "id">[] = [
    { name: "Diego Pinho" },
    { name: "Bruna Hamori" },
  ];
  const disciplines: Omit<Disciplines, "id">[] = [
    {
      name: "HTML e CSS",
      termId: 1,
    },
    { name: "JavaScript", termId: 2 },
    { name: "React", termId: 3 },
    { name: "Humildade", termId: 1 },
    { name: "Planejamento", termId: 2 },
    { name: "Autoconfiança", termId: 3 },
  ];
  const teachersDisciplines: Omit<TeacherDisciplines, "id">[] = [
    { teacherId: 1, disciplineId: 1 },
    { teacherId: 1, disciplineId: 2 },
    { teacherId: 1, disciplineId: 3 },
    { teacherId: 2, disciplineId: 4 },
    { teacherId: 2, disciplineId: 5 },
    { teacherId: 2, disciplineId: 6 },
  ];

  await prisma.users.create({ data: user });
  await prisma.terms.createMany({ data: terms });
  await prisma.categories.createMany({ data: categories });
  await prisma.teachers.createMany({ data: teachers });
  await prisma.disciplines.createMany({ data: disciplines });
  await prisma.teacherDisciplines.createMany({ data: teachersDisciplines });
};

main()
  .catch((e) => console.log(e))
  .finally(() => prisma.$disconnect());
