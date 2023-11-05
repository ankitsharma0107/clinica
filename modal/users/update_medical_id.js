const admin = require("../../config/db");

const db = admin.firestore();
const docRef = db.collection("Users");

const update_medical_id = async (userid, medical_id) => {
  await docRef
    .doc(userid)
    .update({ medical_id: medical_id })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  return medical_id;
};

module.exports = { update_medical_id };
