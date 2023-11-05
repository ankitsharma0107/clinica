const admin = require("../../config/db");

const db = admin.firestore();
const docRef = db.collection("Drug List");

const get_drug_list = async () => {
  let tempDoc = [];
  const events = await docRef;
  await events.get().then(async (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      tempDoc.push({ id: doc.id, ...doc.data() });
    });
    console.log(tempDoc);
  });
  return tempDoc;
};

module.exports = { get_drug_list };
