import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../reducers/user";
import { login } from "../reducers/user";
import { useRouter } from "next/router";
import { Button, ConfigProvider, Modal, Space } from "antd";
import { createStyles, useTheme } from "antd-style";

const useStyle = createStyles(({ tokstyle }) => ({
  "my-modal-body": {
    background: tokstyle.blue1,
    padding: tokstyle.paddingSM,
  },
  "my-modal-mask": {
    boxShadow: `inset 0 0 15px #fff`,
  },
  "my-modal-header": {
    borderBottom: `1px dotted ${tokstyle.colorPrimary}`,
  },
  "my-modal-footer": {
    color: tokstyle.colorPrimary,
  },
  "my-modal-content": {
    border: "1px solid #333",
  },
}));

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  //const user = useSelector((state) => state.user.value);

  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [password, setSignUpPassword] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  let modaltype;
  const showModal = (argSign) => {
    setIsModalOpen(true);
    modaltype = argSign;
    console.log(modaltype);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    if ((modaltype = "sign in")) handleRegister();
    if ((modaltype = "sign up")) handleconnection();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          router.push("/home");
        } else
          console.log(
            "erreur nouvelle connection" +
              signUpUsername +
              " " +
              signUpFirstname +
              " " +
              data.token
          );
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
          router.push("/home");
        } else
          console.log(
            "erreur connection " +
              signUpUsername +
              " " +
              signUpFirstname +
              " " +
              data.token
          );
      });
  };

  return (
    <div>
      <main className={styles.main}>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
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
        </Modal>
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
          <h1 className={styles.titleh1}>
            {" "}
            See what's<br></br> happening
          </h1>

          <h2 className={styles.titleh2}> Join Hackatweet today. </h2>

          <button
            onClick={() => showModal("sign up")} // handleRegister()}
            className={styles.bouttonSign}
          >
            Sign up
          </button>
          <h3 className={styles.titleh3}>Already have an account?</h3>
          <button
            onClick={() => showModal("sign in")}
            className={styles.secondarybtn}
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
