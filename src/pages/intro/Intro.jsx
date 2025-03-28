import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Intro.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import introImg from "../../assets/intro.png";
import logoImg from "../../assets/logo.png";

function Intro() {
  const [showAnimation, setShowAnimation] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.introContainer}>
      {showAnimation ? (
        <div className={styles.logoAnimation}>
          <img src={logoImg} alt="Logo" className={styles.logo} />
        </div>
      ) : (
        <div>
          <div className={styles.introContent}>
            <img src={introImg} alt="Bienvenida" className={styles.introImage} />
            <h1>Punche</h1>
            <h2>Educación financiera</h2>
            <p>Te ofrecemos herramientas para manejar mejor tu dinero, tomando decisiones que te permitan crecer, de manera divertida y sencilla</p>

          </div>
          <button className={styles.introButton} onClick={() => navigate("/avatar")}>
            Comencemos!
          </button>
        </div>

      )}
    </div>
  );
}

export default Intro;
