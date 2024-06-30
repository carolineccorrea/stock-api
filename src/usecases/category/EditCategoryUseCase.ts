import { injectable } from "tsyringe";
import { CategoryRepository } from "../../infra/repositories/CategoryRepository/CategoryRepository";

@injectable()
export class EditCategoryUseCase {
    constructor(private categoryRepo: CategoryRepository) { }

    async execute(name: string, categoryId: string) {
        try {
            if (categoryId === " " || name === " " || !categoryId || !name) {
                throw new Error("Invalid arguments to edit category!");
            }
            return this.categoryRepo.edit(name, categoryId)
        } catch (error) {
            return error;
        }
    }
}