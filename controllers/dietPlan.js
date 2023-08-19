const getDietPlan= async (req,res) => {
    const data={breakfast:300, lunch:400, snacks:200, dinner:300}
    res.status(200).json(data);
};
const getDietPlanTesting= async (req,res) => {
    res.status(200).json({msg:"I am getDietPlanTesting"});
};
module.exports = {getDietPlan,getDietPlanTesting};