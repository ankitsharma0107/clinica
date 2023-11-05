const express = require("express");
const router = express.Router();

const { checkCookie, savecookie } = require("../middleware/check_auth");

const { user_exist } = require("../modal/users/user");

router.get("/", (req, res) => {
  res.render("pages/home");
});

router.get("/details", (req, res) => {
  res.render("pages/details");
});

router.get("/cart", (req, res) => {
  res.render("pages/cart");
});

router.get("/login", (req, res) => {
  res.render("pages/login");
});

router.get("/logout", checkCookie, async (req, res) => {
  console.log(req.decodedClaims.uid);

  const logout_user = await user_exist(req.decodedClaims.uid);
  res.clearCookie("__session");
  res.redirect("/");
});

router.get("/savecookie", (req, res) => {
  const Idtoken = req.query.idToken;
  console.log(Idtoken);
  savecookie(Idtoken, res);
});

router.get("/python", (req, res) => {
  const spawn = require("child_process").spawn;

  const process = spawn("python", ["./scripts/demo.py", req.query.val]);

  process.stdout.on("data", function (data) {
    console.log(data);
    console.log("\x1b[36m%s\x1b[0m", data.toString());
    res.send(data.toString());
  });
});

module.exports = router;
