const express = require("express");
const router = express.Router();
const PEOPLE_C = require("../../../controllers").peopleController;
const { reqBody } = require("../../../middlewares")

/*
 * GET
 */
router.get("/", PEOPLE_C.findAllPeople);
/*
 * GET /rel/users
 */
router.get("/rel/users", PEOPLE_C.findAllPeopleUser);

/*
 * GET
 */
router.get("/:id", PEOPLE_C.findOnePeople);

/*
 * GET /rel/users/:id
 */
router.get("/rel/users/:id", PEOPLE_C.findOnePeopleUser);

/*
 * PUT
 */
router.put("/:id", PEOPLE_C.updatePeople);

/*
 * DELETE
 */
router.delete("/:id", PEOPLE_C.deletePeople);


module.exports = router;
