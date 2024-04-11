import { Router } from "express";
import Author from "./models/author.model.js";

export const apiRoute = Router();

apiRoute.get("/", async (req, res, next) =>{
    try {
        let author = await Author.create(req.body);
        res.send(author).status(400);

    } catch (error) {
        next(error);
    }
});

apiRoute.get("/:id", async (req, res, next) =>{
    try {
        let author = await Author.create(req.body);
        res.send(author);

    } catch (error) {
        next(error);
    }
});

apiRoute.post("/:id", async (req, res, next) =>{
    try {
        let author = await Author.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send(author);
    } catch (error) {
        next(error);
    }
});
