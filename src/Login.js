import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth , googleProvider} from "./firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut, signInWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    console.log(auth?.currentUser?.email);
  const register = async () => {
    try {
    await createUserWithEmailAndPassword(auth, email, password).then((user)=>{
        navigate('/')
    });
    } catch (err){
      alert(err);
    }
  };
//   const signInWithGoogle = async () => {
//     try {
//     await signInWithPopup(auth,googleProvider);
//     } catch (err){
//       console.error(err);
//     }
//   };
//   const logOut = async () => {
//     try {
//     await signOut(auth);
//     } catch (err){
//       console.error(err);
//     }
//   };

  const signIn = e => {
    e.preventDefault();
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigate('/')
  })
  .catch((error) => {
    alert(error.message)
  });


    

}

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login