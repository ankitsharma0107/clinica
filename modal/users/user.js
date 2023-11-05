const admin = require("../../config/db");

const db = admin.firestore();
const docRef = db.collection("Users");

const save_user = async (userid, user_email, user_name) => {
  console.log(userid);

  await docRef
    .doc(userid)
    .set({ exist: true, email: user_email, name: user_name, user_id: userid })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  return userid;
};

async function user_exist(userid) {
  let isexist;
  await docRef
    .doc(userid)
    .update({ exist: false })
    .then(() => {
      console.log("Logout Successfully");
      isexist = true;
    })
    .catch((error) => {
      console.error("Error logout: ", error);
      isexist = false;
    });
  return isexist;
}

module.exports = { save_user, user_exist };
