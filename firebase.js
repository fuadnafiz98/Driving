
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAe1deluN3RM1IgLlSCoAlBXGQrm7PXsXc",
    authDomain: "testdrive-48e09.firebaseapp.com",
    databaseURL: "https://testdrive-48e09.firebaseio.com",
    projectId: "testdrive-48e09",
    storageBucket: "testdrive-48e09.appspot.com",
    messagingSenderId: "42359084205",
    appId: "1:42359084205:web:40c01e0aac98e321192224"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
