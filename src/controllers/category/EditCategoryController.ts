import { Request, Response } from "express";
import { IController } from "../protocols/IController";
import { inject, injectable } from "tsyringe";
import { EditCategoryUseCase } from "../../usecases/category/EditCategoryUseCase";

@injectable()
class EditCategoryController implements IController {
  constructor(
    @inject(EditCategoryUseCase) private editCategoryUseCase: EditCategoryUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const { name, categoryId } = req.body;
      const edited = await this.editCategoryUseCase.execute(name, categoryId)
      res.json(edited);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
 }
}
export { EditCategoryController };