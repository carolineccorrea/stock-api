import { EditCategoryRequest } from "../../../models/interfaces/category/EditCategoryRequest";
import prismaClient from "../../../prisma/index";

class CategoryRepository {
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

  async find(categoryId: string) {
    const categories = await prismaClient.category.findFirst({
      where: {
        id: categoryId,
      },
    });

    return categories;
  }

  async delete(categoryId: string){
      const category = await prismaClient.category.delete({
        where: {
          id: categoryId,
        },
      });
      return category;
  }

  async edit(name: string, categoryId: string) {
    const productEdited = await prismaClient.category.update({
      where: {
        id: categoryId,
      },
      data: {
        name: name,
      },
    });
    return productEdited;
  }
}

export { CategoryRepository };
