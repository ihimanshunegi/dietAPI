const express= require("express");
const router= express.Router();

const {
    getDietPlan,
    getDietPlanTesting
} = require("../controllers/dietPlan")

router.route("/").get(getDietPlan);
router.route("/testing").get(getDietPlanTesting);

module.exports = router;