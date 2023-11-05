const express = require("express");
const axios = require("axios");

const router = express.Router();
const { checkCookie } = require("../../middleware/check_auth");
const { get_drug_list } = require("../../modal/drug_list/drug_list");
const { find_drug_list } = require("../../modal/drug_list/find_list");
const { monthDiff } = require("../../utility/utility");

console.log(monthDiff);

router.get("/:id/details", checkCookie, async (req, res) => {
  const drug_data = await find_drug_list(req.params.id);

  console.log("\x1b[36m%s\x1b[0m", drug_data);

  const category = drug_data.category;
  const month_num = monthDiff(new Date(2014, 01), new Date());

  console.log(month_num);

  const response = await axios.get(`https://healthapi1.herokuapp.com/${month_num}/${category}`);

  const predicted_value = response.data;

  // drug_data.map((data) => {
  //   console.log("\x1b[36m%s\x1b[0m", data);
  // });
  res.render("pages/details", { drug_data, predicted_value });
});

// router.post("/:id/details", checkCookie, async (req, res) => {
//   const drug_data = await find_drug_list(req.params.id);

//   const category_pre = drug_data.category;
//   const month_num_pre = monthDiff(new Date(2014, 01), new Date());
//   console.log(month_num_pre);
//   const response_pre = await axios.get(`https://healthapi1.herokuapp.com/${month_num_pre}/${category_pre}`);
//   const predicted_value = response_pre.data;

//   console.log("\x1b[36m%s\x1b[0m", req.body);

//   const month_num_future = monthDiff(new Date(2014, 01), new Date());
//   console.log(month_num_future);
//   const response_future = await axios.get(`https://healthapi1.herokuapp.com/${month_num_future}/${category_pre}`);
//   const future_predicted_value = response_future.data;
//   // drug_data.map((data) => {
//   //   console.log("\x1b[36m%s\x1b[0m", data);
//   // });
//   if (predicted_value) {
//     res.json("success");
//   } else {
//     res.status(404);
//   }
//   res.render("pages/details", { drug_data, predicted_value, future_predicted_value });
// });

module.exports = router;
