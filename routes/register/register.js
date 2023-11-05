const express = require("express");

const router = express.Router();

const { vendor_register } = require("../../modal/vendor_register/vendor");
const { checkCookie, savecookie } = require("../../middleware/check_auth");
const { update_medical_id } = require("../../modal/users/update_medical_id");

router.post("/", checkCookie, (req, res) => {
  console.log(req.body);
  const register = vendor_register(req.decodedClaims.uid, req.body);
  if (register) {
    const update_med_id = update_medical_id(req.decodedClaims.uid, req.body.medical_id);

    update_med_id ? res.json("success") : res.status(404);
  } else {
    res.status(404);
  }
});

router.get("/", checkCookie, (req, res) => {
  res.render("pages/register");
});

module.exports = router;
