const admin = require("../../config/db");

const db = admin.firestore();
const docRef = db.collection("Drug List");

const find_drug_list = async (id) => {
  const snapshot = await docRef.doc(id).get();
  const drug_data = snapshot.data();
  drug_data.id = id;

  if (drug_data) {
    return drug_data;
  } else {
    return null;
  }
};

module.exports = { find_drug_list };
