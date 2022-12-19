import React from "react"
import {auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect} from "../../utilities/firebase/firebase.js"
import { useEffect } from "react"
import { getRedirectResult} from 'firebase/auth'

const SignIn = () => {
    
    // useEffect( () => {

    //     const getRedirectData = async () => {
    //         const response = await getRedirectResult(auth);
    //         console.log(response)
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user)
    //         }
    //     }

    //     getRedirectData()
    // },[])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        console.log(user)
         const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    )
}

export default SignIn