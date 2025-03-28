import React from "react";
import styles from "./Community.module.scss";
import Footer from "../../components/shared/footer/footer";
import CrownIcon from "../../assets/icons/ic_crown.svg";
import MedalIcon from "../../assets/icons/ic_medal.svg";
import AvatarIcon from "../../assets/icons/ic_avatar.svg";

const Community = () => {
  const podium = [
    { name: "Claudia", coins: 500, position: 1 },
    { name: "Paula", coins: 200, position: 2 },
    { name: "Catherine", coins: 100, position: 3 },
  ];

  const others = [
    { name: "Maria Palacios", coins: 90, position: 4 },
    { name: "Juana Roma", coins: 80, position: 5 },
    { name: "Maribel Rodrigues", coins: 70, position: 6 },
    { name: "Martha Perez", coins: 60, position: 7 },
    { name: "Milagros Tuanama", coins: 50, position: 8 },
  ];

  return (
    <>
      <div className={styles.ranking}>
        <h2>Conoce a más mujeres que la rompen:</h2>
        <div className={styles.podium}>
          {podium.map((item) => (
            <div
              key={item.position}
              className={`${styles.podiumItem} ${
                styles[`position${item.position}`]
              }`}
            >
              <div className={`${styles.avatarContainer} ${styles[`${item.position === 1 ? 'bFirst' : ''}`]}`}>
                <img
                  src={AvatarIcon}
                  alt="Avatar"
                  className={styles.faceAvatar}
                />
                {item.position === 1 && (
                  <img src={CrownIcon} alt="Crown" className={styles.crown} />
                )}
                <div className={`${styles.circle} ${styles[`${item.position === 1 ? 'first' : ''}`]}`}>{item.position}</div>
              </div>
              <p>{item.name}</p>
              <div className={`${styles.coinsContainer} ${styles[`${item.position === 1 ? 'first' : ''}`]}`}>
                <p className={styles.coins}>
                  <img src={MedalIcon} alt="Medal" /> {item.coins}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.others}>
          {others.map((item) => (
            <div key={item.position} className={styles.otherItem}>
              <span>{item.position}°</span>
              <img src={AvatarIcon} alt="Avatar" className={styles.avatar} />
              <p>{item.name}</p>
              <p className={styles.coins}>
                <img src={MedalIcon} alt="Medal" className={styles.medal} /> {item.coins}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Community;
