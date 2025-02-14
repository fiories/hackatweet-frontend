import styles from "../styles/Home2.module.css";

function Homecomponent() {
  return (
    <main className={styles.main}>
      <div className={styles.leftcol}>
      <img
            src="logo.svg"
            alt="oiseau1.png"
            className={styles.logo}
          ></img>
      </div>
      <div className={styles.middlecol}>
        <h1 className={styles.hometitle}>Home</h1>
      </div>
      <div className={styles.rightcol}>
        <h2 className={styles.hometitle}>Trends</h2>
      </div>
    </main>
  );
}

export default Homecomponent;
