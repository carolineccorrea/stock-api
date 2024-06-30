import { injectable } from "tsyringe";
import { CategoryRepository } from "../../infra/repositories/CategoryRepository/CategoryRepository";

@injectable()
export class CreateCategoryUseCase {
    constructor(private categoryRepo: CategoryRepository) {}

    async create(name: string): Promise<any> {
      try {
        if (name === "" || name === null || !name) {
          throw new Error("Invalid name");
        }    
        return this.categoryRepo.create(name);
      } catch (error) {
        return error;
      }
    }
}