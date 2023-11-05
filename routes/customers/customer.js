const express = require("express");
const axios = require("axios");

const router = express.Router();
const { checkCookie } = require("../../middleware/check_auth");
const { get_customer_list } = require("../../modal/customers/get_customer");

router.get("/", checkCookie, async (req, res) => {
  const customer = await get_customer_list();

  console.log(customer);

  console.log("\x1b[36m%s\x1b[0m", customer);
  console.log("ab");

  // drug_data.map((data) => {
  //   console.log("\x1b[36m%s\x1b[0m", data);
  // });
  res.render("pages/customer", { customer });
});

module.exports = router;
