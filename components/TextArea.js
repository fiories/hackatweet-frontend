import React from "react";
import { Input } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTweet } from "react-redux";
import { tweet } from "../reducers/tweet";
const { TextArea } = Input;
import styles from "../styles/TextArea.module.css";

function TextInput() {

  const dispatch = useDispatch();
  const tweet = useSelector((state) => state.value);

  const [userInfo, setUserInfo] = useState("");
  const [messageInfo, setMessageInfo] = useState("");

  const handleTweet = () => {
    fetch(
      "http://localhost:3000/tweets/posting/f-Fy1k3uDpJ7FF-6S1b5-53XOv1vPgUU",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: userInfo, message: messageInfo }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // if (data) {
        //   dispatch(addTweet({ username: signUpUsername, token: data.token }));
        // }
        console.log(data)
      });
  };

  const count = messageInfo.length



  return (
    <div className={styles.container}>
      <br />
      <TextArea
        rows={2}
        placeholder="What's up?"
        maxLength={280}
        className={styles.input}
        onChange={(e) => setMessageInfo(e.target.value)}
      />
      <div className={styles.btngroup}>
        <p>
          {count}
          <span>/280</span>
        </p>
        <button className={styles.primarybtn} onClick={() => handleTweet()}>
          Tweet
        </button>
      </div>
    </div>
  );
}

export default TextInput;
