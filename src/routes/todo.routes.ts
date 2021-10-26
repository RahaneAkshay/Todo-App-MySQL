import { Router, Request, Response } from "express";
import { Todo } from "../model/todo.model";
export const router = Router();

router.post("/create", async (req: Request, res: Response): Promise<any> => {
  try {
    console.log(req.body);
    const result = await Todo.create(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/fetch", async (req: Request, res: Response): Promise<any> => {
  try {
    const result = await Todo.findAll();
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.get("/update/:id", async (req: Request, res: Response): Promise<any> => {
  try {
      const id:number = Number (req.params.id)
    const result = await Todo.update(req.body,{where:{id}});
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.get("/delete/:id", async (req: Request, res: Response): Promise<any> => {
  try {
    const id:number = Number (req.params.id)
    const result = await Todo.destroy({where:{id}})
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
