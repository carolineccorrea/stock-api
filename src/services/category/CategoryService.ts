import prismaClient from "../../prisma/index";

class CategoryService {
  async create(name: string) {
    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return category;
  }

  async list() {
    const categories = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return categories;
  }
}

export { CategoryService };
