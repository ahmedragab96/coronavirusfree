import * as functions from 'firebase-functions';
// const admin = require('firebase-admin');
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest(async (request, response) => {
  await createPost();
  response.send("Hello from Firebase!");
});

const createPost = (async () => {
  await admin.firestore().collection('posts').add({
    title: 'new POst',
    description: 'decription post',
    link: 'https://www.google.com',
  })
});