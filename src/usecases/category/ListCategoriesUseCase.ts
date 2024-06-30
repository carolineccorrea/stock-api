import { injectable } from "tsyringe";
import { CategoryRepository } from "../../infra/repositories/CategoryRepository/CategoryRepository";

@injectable()
export class ListCategoriesUseCase {
  constructor(private categoryRepo: CategoryRepository) {}

    async execute(): Promise<any> {
      try {
        return this.categoryRepo.list()
      } catch (error) {
        return error;
      }
    }
}