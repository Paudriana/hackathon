import React from "react";
import styles from "./Community.module.scss";
import Footer from "../../components/shared/footer/Footer";
import CrownIcon from "../../assets/icons/ic_crown.svg";
import MedalIcon from "../../assets/icons/ic_medal.svg";
import AvatarCard from "../avatar/AvatarCard";

import { avatars } from "../../utils/utils";

const Community = () => {
  const podium = [
    { name: "Claudia", coins: 500, position: 1 },
    { name: "Paula", coins: 200, position: 2 },
    { name: "Catherine", coins: 100, position: 3 },
  ];

  const others = [
    { name: "Marisol", coins: 90, position: 4 },
    { name: "Juana", coins: 80, position: 5 },
    { name: "Maribel Rodrigues", coins: 70, position: 6 },
    { name: "Rosita", coins: 60, position: 7 },
    { name: "Laura", coins: 50, position: 8 },
  ];

  const generateRandomAvatar = () => {
    return (
        <AvatarCard
          topType={avatars[Math.floor(Math.random() * avatars.length)].topType}
          accessoriesType={avatars[Math.floor(Math.random() * avatars.length)].accessoriesType}
          hairColor={avatars[Math.floor(Math.random() * avatars.length)].hairColor}
          clotheType={avatars[Math.floor(Math.random() * avatars.length)].clotheType}
          clotheColor={avatars[Math.floor(Math.random() * avatars.length)].clotheColor}
          skinColor={avatars[Math.floor(Math.random() * avatars.length)].skinColor}
        />
    )
  }

  return (
    <>
      <div className={styles.ranking}>
        <h2>Conoce a más mujeres que tienen punche:</h2>
        <div className={styles.podium}>
          {podium.map((item) => (
            <div
              key={item.position}
              className={`${styles.podiumItem} ${styles[`position${item.position}`]
                }`}
            >
              <div className={`${styles.avatarContainer} ${styles[`${item.position === 1 ? 'bFirst' : ''}`]}`}>
                {generateRandomAvatar()}
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
              {generateRandomAvatar()}
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
