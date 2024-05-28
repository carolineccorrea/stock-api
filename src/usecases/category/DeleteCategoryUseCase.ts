import { injectable } from "tsyringe";
import { CategoryService } from "../../services/category/CategoryService";

@injectable()
export class DeleteCategoryUseCase {
  constructor(private categoryService: CategoryService) {}

    async execute(categoryId: string): Promise<any> {
      try {
        return this.categoryService.delete(categoryId)
      } catch (error) {
        return error;
      }
    }
}