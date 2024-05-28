import { Request, Response, request, response } from "express";
import { IController } from "../protocols/IController";
import { inject, injectable } from "tsyringe";
import { DeleteCategoryUseCase } from "../../usecases/category/DeleteCategoryUseCase";

@injectable()
class DeleteCategoryController implements IController {
  constructor(
    @inject(DeleteCategoryUseCase) private deleteCategoryUseCase: DeleteCategoryUseCase
  ) {}
  async handle(req: Request, res: Response): Promise<void> {
    const categoryId = req.query.categoryId as string;

    const category = this.deleteCategoryUseCase.execute(categoryId)
    res.json(category);
  }
}

export { DeleteCategoryController };
