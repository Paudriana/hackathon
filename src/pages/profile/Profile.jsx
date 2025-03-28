import React from "react";
import styles from "./Profile.module.scss";
import Footer from "../../components/shared/footer/footer";
import avatarIcon from "../../assets/icons/ic_avatar.svg";
import pencilIcon from "../../assets/icons/ic_pencil_white.svg";
import coinsIcon from "../../assets/icons/ic_coins.svg";
import imgMeet from "../../assets/images/img_meet.jpg";
import checkIcon from "../../assets/icons/ic_pink_check.svg";
import medalIcon from "../../assets/icons/ic_medal.svg";
import crownIcon from "../../assets/icons/ic_crown.svg";

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
          <div className={styles.statIcon}>
            <img src={checkIcon} alt="Check" />
          </div>
          <div>
            <p className={styles.statValue}>Nivel</p>
            <p className={styles.statBig}>2</p>
          </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statIcon}>
            <img src={medalIcon} alt="Medal" />
          </div>
          <div>
            <p className={styles.statValue}>Experiencia</p>
            <p className={styles.statBig}>500</p>
          </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statIcon}>
            <img src={crownIcon} alt="Crown" />
          </div>
          <div>
            <p className={styles.statValue}>Posición</p>
            <p className={styles.statBig}>25</p>
          </div>
        </div>
      </div>
      <h5 className="text-start fw-bold mt-4">Canjea tus intis:</h5>
      <div className={styles.rewards}>
        <div className={styles.carousel}>
          <div className={styles.card}>
            <img src={imgMeet} alt="Asesoramiento sobre créditos" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <p className={styles.title}>Asesoramiento sobre créditos</p>
              <p className={styles.rewardCost}>
                <img src={coinsIcon} alt="Coins" className={styles.cardCoin} />
                20 intis
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={imgMeet} alt="Asesoramiento sobre créditos" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <p className={styles.title}>Asesoramiento sobre créditos</p>
              <p className={styles.rewardCost}>
                <img src={coinsIcon} alt="Coins" className={styles.cardCoin} />
                20 intis
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.disabled}`}>
          <img src={imgMeet} alt="Asesoramiento sobre créditos" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <p className={styles.title}>Descuentos en tiendas</p>
              <p className={styles.rewardCost}>
                <img src={coinsIcon} alt="Coins" className={styles.cardCoin} />
                50 intis
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
