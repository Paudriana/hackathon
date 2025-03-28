import React from "react";
import styles from "./Community.module.scss";
import Footer from "../../components/shared/footer/footer";

const Community = () => {
  const top3 = [
    { name: "Claudia", coins: 100 },
    { name: "Paula", coins: 70 },
    { name: "Catherine", coins: 10 },
  ];

  const others = [
    { name: "Maria Palacios", coins: 9 },
    { name: "Juana Roma", coins: 8 },
    { name: "Maribel Rodrigues", coins: 7 },
    { name: "Martha Perez", coins: 6 },
    { name: "Milagros Tuanama", coins: 5 },
  ];
  return (
    <>
      <div className={styles.ranking}>
        <div className={styles.cnt_podium}>
          <h2>Conoce a más mujeres que la rompen:</h2>
          <div className={styles.podium}>
            {top3.map((user, index) => (
              <div
                key={index}
                className={`${styles.podiumItem} ${
                  styles[`position${index + 1}`]
                }`}
              >
                <div className={styles.avatarContainer}>
                  {index === 0 && <span className={styles.crown}>👑</span>}
                  <div className={styles.circle}>{index + 1}</div>
                </div>
                <p>{user.name}</p>
                <div className={styles.coins}>
                  <span role="img" aria-label="coins">
                    🪙
                  </span>{" "}
                  {user.coins}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.others}>
          {others.map((user, index) => (
            <div key={index} className={styles.otherItem}>
              <span>{index + 4}°</span>
              <p>{user.name}</p>
              <div className={styles.coins}>
                <span role="img" aria-label="coins">
                  🪙
                </span>{" "}
                {user.coins}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Community;
