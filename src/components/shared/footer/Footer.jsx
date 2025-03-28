import React from 'react';
import styles from './Footer.module.scss';
import { FaUser, FaLightbulb, FaUsers } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <div className={styles.footer}>
      <div
        className={`${styles.item} ${isActive('/profile') ? styles.active : ''}`}
        onClick={() => navigate('/profile')}
      >
        <FaUser className={styles.icon} />
        <span>Perfil</span>
      </div>
      <div
        className={`${styles.item} ${isActive('/learn') ? styles.active : ''}`}
        onClick={() => navigate('/learn')}
      >
        <FaLightbulb className={styles.icon} />
        <span>Aprender</span>
      </div>
      <div
        className={`${styles.item} ${isActive('/community') ? styles.active : ''}`}
        onClick={() => navigate('/community')}
      >
        <FaUsers className={styles.icon} />
        <span>Comunidad</span>
      </div>
    </div>
  );
};

export default Footer;
