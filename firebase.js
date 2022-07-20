import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZ3gClhJCzZjZ3ccqhD1iPdTBIriaWnWE",
    authDomain: "fir-tera2.firebaseapp.com",
    projectId: "fir-tera2",
    storageBucket: "fir-tera2.appspot.com",
    messagingSenderId: "476594519801",
    appId: "1:476594519801:web:c774b291811900c6df6c28"
  };
  

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = app.firebase()
}

const auth = firebase.auth();
const db = firebase.firestore(app);
export {auth, db};