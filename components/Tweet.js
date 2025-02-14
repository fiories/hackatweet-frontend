import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Tweet(props) {
  let now = Date.now();

  let date = now-new Date(props.postTime);
  let jour = Math.floor((date)/60000/60/24);
  date=date-jour*60000*60*24;
  let heur =Math.floor((date)/60000/60);
  date=date-heur*60000*60;
  let minute=Math.floor((date)/60000/60);
  date=date-minute*60000;
  let seconde=Math.floor((date)/60000);
  
  let mydelay= jour+ " j ,"+heur+" h ,"+minute+" m ,"+seconde+" sec"; 
  console.log(mydelay);

  
  
  return (
    <div className={styles.container}>
      <div className={styles.tweetheader}>
        <img src="avatar.png" className={styles.avatar}></img>
        <p className={styles.firstname}>{props.user.firstname}</p>
        <p className={styles.username}>@{props.user.username} ·</p>
        <p className={styles.postTime}>{mydelay}</p>
      </div>
      <div>
        <p className={styles.message}>{props.message}</p>
      </div>
      <FontAwesomeIcon icon={faHeart} className={styles.heart}/>
    </div>
  );
}

export default Tweet;
