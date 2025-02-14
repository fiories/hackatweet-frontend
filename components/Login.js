import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import {user} from '../reducers/user';




function Login() {
  const dispatch = useDispatch();

  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [password, setSignUpPassword] = useState("");
  const [token , settoken]=useState("");

  let BafficheSignup = false;
  let BafficheSignin = false;

  function handleSignUpClick() {
    BafficheSignup = true;
    handleRegister();
  }

  function handleSignInClick() {
    BafficheSignin = true;
    handleRegister();
  }

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: signUpFirstname,
        username: signUpUsername,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);""
        settoken(data.token);
        console.log("test token:");
        console.log(token);


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
            {" "}
            <img
              src="oiseau2.png"
              alt="oiseau1.png"
              className={styles.oiseauAccueil}
            ></img>
          </div>
          <div className={styles.partiedroite}>
            <img
              src="oiseau2.png"
              alt="oiseau1.png"
              className={styles.oiseauLogoAccueil}
            ></img>
            <h1 className={styles.title}> See What happening </h1>
            <h2 className={styles.title}> Join Hackatweet today. </h2>
            <input
              type="text"
              placeholder="Firstname"
              id="signUpFirstname"
              onChange={(e) => setSignUpFirstname(e.target.value)}
              value={signUpFirstname}
            />
            <input
              type="text"
              placeholder="Username"
              id="signUpUsername"
              onChange={(e) => setSignUpUsername(e.target.value)}
              value={signUpUsername}
            />  
            <input
            type="text"
            placeholder="password"
            id="password"
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={password}
          />

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
              {" "}
              Sign in
            </button>
          </div>
        </main>
     
    </div>
  );
}
export default Login;
