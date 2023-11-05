const admin = require("../../config/db");

const db = admin.firestore();
const docRef = db.collection("Vendor_register");

const vendor_register = async (userid, obj) => {
  await docRef
    .doc(userid)
    .set(obj)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  return userid;
};

module.exports = { vendor_register };
