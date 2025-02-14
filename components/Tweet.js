import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Tweet(props) {
  return (
    <div className={styles.container}>
      <div className={styles.tweetheader}>
        <img src="avatar.png" className={styles.avatar}></img>
        <p className={styles.firstname}>{props.user.firstname}</p>
        <p className={styles.username}>@{props.user.username} ·</p>
        <p className={styles.postTime}>{props.postTime}</p>
      </div>
      <div>
        <p className={styles.message}>{props.message}</p>
      </div>
      <FontAwesomeIcon icon={faHeart} className={styles.heart}/>
    </div>
  );
}

export default Tweet;
