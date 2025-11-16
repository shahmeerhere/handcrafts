import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: "admin@handcrafts.test" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@handcrafts.test",
      password: bcrypt.hashSync("admin123", 10), // fixed password
      role: "admin"
    }
  });

  console.log("Admin user created: admin@handcrafts.test / admin123");
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
