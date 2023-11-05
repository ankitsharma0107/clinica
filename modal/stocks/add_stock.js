const admin = require("../../config/db");

const db = admin.firestore();
const docRef = db.collection("Stocks");

const add_new_stock = async (userid, obj) => {
  const snapshot = await db.collection("Users").doc(userid).get();
  const data = snapshot.data();
  const medical_id = data.medical_id;

  await docRef
    .doc(medical_id)
    .set(obj)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  return userid;
};

module.exports = { add_new_stock };
