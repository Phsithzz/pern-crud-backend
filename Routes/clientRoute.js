import express from "express";

import * as clientController from "../Controllers/clientController.js";

const router = express.Router();

//C R U D

router.get("/clients", clientController.getClient);
router.post("/clients", clientController.createClient);
router.put("/clients/:id", clientController.updateClient);
router.delete("/clients/:id", clientController.deleteClient);
router.get("/clients/search", clientController.searchClient);

export default router;
