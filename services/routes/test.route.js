import { Router } from "express";

export const testRoute = Router();

testRoute.get("/", async (req, res) =>{
    res.send("sei al route principale");
});