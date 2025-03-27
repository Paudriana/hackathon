import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Intro.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <img src="/logo.png" alt="Logo Animado" className={styles.logo} />
        </div>
      ) : (
        <div className={styles.introContent}>
          <img src="/intro-image.png" alt="Bienvenida" className={styles.introImage} />
          <h1>¡Bienvenida a la aventura financiera!</h1>
          <p>Aprende a manejar tus finanzas de manera divertida y sencilla.</p>
          <button className="btn btn-primary" onClick={() => navigate("/avatar")}>
            Comencemos!
          </button>
        </div>
      )}
    </div>
  );
}

export default Intro;
