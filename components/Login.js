import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../reducers/user";
import {login} from "../reducers/user";
import { useRouter} from 'next/router'

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  //const user = useSelector((state) => state.user.value);

  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [password, setSignUpPassword] = useState("");

  const [token, settoken] = useState("");

  let BafficheSignup = false;
  let BafficheSignin = false;

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
        console.log("data reponse");
        console.log(data);
        if (data.result) {
         
          dispatch(
            login({
              username: signUpUsername,
              firstname: signUpFirstname,
              token: data.token,
            })
          );
          console.log("nouvelle connection ok");
          router.push('/home');
        }else console.log("erreur nouvelle connection"+ signUpUsername +" " +signUpFirstname +" "+data.token);

     
      });
  };
  const handleconnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signUpUsername,
        firstname: signUpFirstname,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data reponse");
        console.log(data);
        if (data.result) {
          dispatch(
            login({
              username: signUpUsername,
              firstname: signUpFirstname,
              token: data.token,
            })
          
          );
          console.log("connection ok");
         router.push('/home');
        }else console.log("erreur connection "+ signUpUsername +" " +signUpFirstname +" "+data.token);
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
            onClick={() => handleRegister()}
            className={styles.bouttonSign}
          >
            Sign up
          </button>
          <h3>Already have an account?</h3>
          <button
            onClick={() => handleconnection()}
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
