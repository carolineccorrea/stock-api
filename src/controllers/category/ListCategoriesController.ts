import { Request, Response } from "express";
import { IController } from "../protocols/IController";
import { inject, injectable } from "tsyringe";
import { ListCategoriesUseCase } from "../../usecases/category/ListCategoriesUseCase";

@injectable()
class ListCategoriesController implements IController {
  constructor(
    @inject(ListCategoriesUseCase) private listCategoriesUseCase: ListCategoriesUseCase
  ) {}
  async handle(req: Request, res: Response): Promise<void> {
    const categories = await this.listCategoriesUseCase.execute();
    res.json(categories);
  }
}
export { ListCategoriesController };
