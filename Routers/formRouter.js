import express from "express";
import { deleteFrom, findForm, findFormRes, getAllForm, newForm, newResponse, updateForm } from "../Controllers/formControllers.js";

const formRouter = express.Router();

formRouter.post("/add/form", newForm);
formRouter.get("/all/form", getAllForm);
formRouter.post("/form/byId",findForm);
formRouter.post("/form/res/byId",findFormRes);
formRouter.post("/form/update",updateForm);
formRouter.post("/form/submit",newResponse);
formRouter.delete("/form/delete/:id",deleteFrom);

export default formRouter;
