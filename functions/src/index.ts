import * as functions from 'firebase-functions';
// const admin = require('firebase-admin');
import * as admin from 'firebase-admin';
import algoliasearch from 'algoliasearch';
admin.initializeApp(functions.config().firebase);

const ALGOLIA_ID = '4K22Y5Q58Z';
const ALGOLIA_ADMIN_KEY = 'e6d3931afbe045df43ecbef8f0f5976e';

const ALGOLIA_INDEX_NAME = 'posts';
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

exports.onNoteCreated = functions.firestore.document('posts/{postId}').onCreate((snap, context) => {
  // Get the note document
  const post = snap.data();

  // Add an 'objectID' field which Algolia requires
  post!.objectID = context.params.postId;

  // Write to the algolia index
  const index = client.initIndex(ALGOLIA_INDEX_NAME);
  return index.saveObject(post!);
});


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