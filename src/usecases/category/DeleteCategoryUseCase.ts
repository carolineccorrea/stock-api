import { injectable } from "tsyringe";
import { CategoryRepository } from "../../infra/repositories/CategoryRepository/CategoryRepository";

@injectable()
export class DeleteCategoryUseCase {
  constructor(private categoryRepo: CategoryRepository) {}

    async execute(categoryId: string): Promise<any> {
      try {
        return this.categoryRepo.delete(categoryId)
      } catch (error) {
        return error;
      }
    }
}