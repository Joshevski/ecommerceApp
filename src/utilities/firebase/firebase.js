import {initializeApp} from 'firebase/app' // initialize
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
//this is for out authentication.


import {
    getFirestore,
    doc, 
    getDoc,
    setDoc

} from 'firebase/firestore' // to initialis firestore database.

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1gH8hhOgMhDleo7MCTHrU-wcL7b3_XSw", // firebase needs this API.  
    authDomain: "crown-project-db-10030.firebaseapp.com",
    projectId: "crown-project-db-10030",
    storageBucket: "crown-project-db-10030.appspot.com",
    messagingSenderId: "1028973748611",
    appId: "1:1028973748611:web:6e44a0873134d1bc6d16b6"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider() // for google auth  
  provider.setCustomParameters({
        prompt: 'select_account'
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
  export const db = getFirestore() 

  export const createUserDocumentFromAuth = async (userAuth) => {
        const userDocRef = doc(db, 'users', userAuth.uid )
        console.log(userDocRef)

        const userSnapshot = await getDoc(userDocRef) // get the data and access data  
        console.log(userSnapshot)
        console.log(userSnapshot.exists()) // method to see if the reference exists in thedb.

        if(!userSnapshot.exists()) {
            const {displayName, email, emailVerified } = userAuth;
            const createdAt = new Date()

            try {
                    await setDoc(userDocRef, {
                            displayName,
                            email,
                            createdAt,
                            
                    })
            }catch(error) {
                console.log('error created the user', error.message)

            }
        }
        
        return userDocRef 

        //if users data not exists
        //create /set the document with the data from userAuth in my collection

        // if users data exists


        // return userDocRef

  }