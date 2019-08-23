const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const sgMail = require("@sendgrid/mail");

const API_KEY = functions.config().sengrid.key;
const TEMPLATE_ID = functions.config().sengrid.template;
sgMail.setApiKey(API_KEY);

exports.genericEmail = functions.https.onCall(async (data, context) => {
  const msg = {
    to: "vahanmkrtumyan@gmail.com",
    from: "vahanmkrtumyan@gmail.com",
    templateID: TEMPLATE_ID,
    dynamic_tempalte_data: {
      name: data.name,
      email: data.email,
      text: data.text
    }
  };

  await sgMail.send(msg);

  return { success: true };
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
