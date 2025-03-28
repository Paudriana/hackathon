import React from "react";
import styles from "./Profile.module.scss";
import Footer from "../../components/shared/footer/footer";
import avatarIcon from "../../assets/icons/ic_avatar.svg";
import pencilIcon from "../../assets/icons/ic_pencil_white.svg";
import coinsIcon from "../../assets/icons/ic_coins.svg";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatarWrapper}>
            <img src={avatarIcon} alt="Avatar" className={styles.avatar} />
            <button className={styles.editButton}>
              <img src={pencilIcon} alt="Edit" />
            </button>
          </div>
        </div>
      </div>
      <h2 className={styles.name}>Paula Pintado</h2>
      <div className={styles.coins}>
        <img src={coinsIcon} alt="Coins" className={styles.coinsIcon} />
        <p className={styles.intis}>20 Intis acumuladas</p>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <p className={styles.statValue}>Nivel 2</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statValue}>Posición 25</p>
        </div>
      </div>
      <div className={styles.rewards}>
        <h3>Canjea tus intis:</h3>
        <div className={styles.rewardCards}>
          <div className={styles.rewardCard}>
            <p>Asesoramiento sobre créditos</p>
            <p className={styles.rewardCost}>20 intis</p>
          </div>
          <div className={`${styles.rewardCard} ${styles.disabled}`}>
            <p>Descuentos en tiendas</p>
            <p className={styles.rewardCost}>50 intis</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
