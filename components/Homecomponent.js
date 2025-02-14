import styles from "../styles/HomeComponent.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Tweet from "./Tweet";
import TextInput from "./TextArea";
import { user } from "../reducers/user";

function Homecomponent() {
  const [tweetsPosts, setTweetsPosts] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.value);



  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((response) => response.json())
      .then((data) => {
        setTweetsPosts(data.data);
      });
  }, [tweetsPosts]);

  const tweets = tweetsPosts.map((data, i) => {
    return <Tweet key={i} {...data} />;
  });

  return (
    <main className={styles.main}>
      <div className={styles.leftcol}>
        <img src="logo.svg" className={styles.logo}></img>
        <div className={styles.leftcolfooter}>
          <div>
            <img src="avatar.png" className={styles.avatar}></img>
          </div>
          <button className={styles.logoutbtn}>Logout</button>
        </div>
      </div>
      <div className={styles.middlecol}>
        <div className={styles.middlecolheader}>
          <h1 className={styles.hometitle}>Home</h1>
          <TextInput></TextInput>
        </div>

        {tweets}
      </div>
      <div className={styles.rightcol}>
        <h2 className={styles.trendstitle}>Trends</h2>
      </div>
    </main>
  );
}

export default Homecomponent;
