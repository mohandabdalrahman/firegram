import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDSM5FGFCJtx-6oQSs7bCqqu49yeb9W60g",
  authDomain: "firegram-f2a60.firebaseapp.com",
  databaseURL: "https://firegram-f2a60.firebaseio.com",
  projectId: "firegram-f2a60",
  storageBucket: "firegram-f2a60.appspot.com",
  messagingSenderId: "344673467046",
  appId: "1:344673467046:web:65e67c6393d90e71d25267"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const programStorage = firebase.storage()
const programFireStore = firebase.firestore()

export {
  programStorage,
  programFireStore
}