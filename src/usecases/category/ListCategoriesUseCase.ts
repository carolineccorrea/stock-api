import { injectable } from "tsyringe";
import { CategoryService } from "../../services/category/CategoryService";

@injectable()
export class ListCategoriesUseCase {
  constructor(private categoryService: CategoryService) {}

    async execute(): Promise<any> {
      try {
        return this.categoryService.list()
      } catch (error) {
        return error;
      }
    }
}