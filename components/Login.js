import styles from "../styles/Home.module.css";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
 reducer: {},
});
function Login() {
  const [signUpUsername, setSignUpUsername] = useState('');

  let BafficheSignup = false;
  let BafficheSignin = false;
  let loginModal;
  function handleSignUpClick() {
    BafficheSignup = true;
    handleRegister();
  }
  
  function handleSignInClick() {
    BafficheSignin = true;
    handleRegister();
  }

  const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signUpUsername}),
		}).then(response => response.json())
			.then(data => {
        console.log(data);
			/*	if (data.result) {
					dispatch(login({ username: signUpUsername, token: data.token }));
					setSignUpUsername('');
					setIsModalVisible(false);
				}*/
			});
	};





  return (
    <div>
      <main className={styles.main}>
        <div className={styles.partiegauche}>
          <img
            src="oiseau1.png"
            alt="oiseau1.png"
            className={styles.oiseauAccueil}
          ></img>
        </div>
        <div className={styles.partiedroite}>
          <img
            src="oiseau1.png"
            alt="oiseau1.png"
            className={styles.oiseauLogoAccueil}
          ></img>
          <h1 className={styles.title}> See What happening </h1>
          <h2 className={styles.title}> Join Hackatweet today. </h2>
          <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
					
          <button
            onClick={() => handleSignUpClick()}
            className={styles.bouttonSign}
          >
            Sign up
          </button>
          <h3>Already have an account?</h3>
          <button
            onClick={() => handleSignInClick()}
            className={styles.bouttonSign}
          >
            Sign in
          </button>
        </div>
      </main>
    </div>
  );
}
export default Login;
