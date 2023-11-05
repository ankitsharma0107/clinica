const express = require("express");
const router = express.Router();
const { checkCookie } = require("../../middleware/check_auth");

const { add_new_stock } = require("../../modal/stocks/add_stock");
const data = require("../../data");
console.log(data);
router.get("/", checkCookie, (req, res) => {
  res.render("pages/stocks");
});

router.post("/", checkCookie, (req, res) => {
  console.log(req.decodedClaims);
  console.log(req.body);
  const stocks = add_new_stock(req.decodedClaims.uid, req.body);
  if (stocks) {
    res.json("success");
  } else {
    res.status(404);
  }

  res.render("pages/list", { data });
});

module.exports = router;
