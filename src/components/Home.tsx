import React, { useState } from 'react';
import CreateShelfPopup from './CreateShelfPopup';
import Shelf from './Shelf';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [shelfConfig, setShelfConfig] = useState<{ rows: number, columns: number }>({ rows: 0, columns: 0 });

  const handleCreateClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = (config?: { rows: number, columns: number }) => {
    setShowPopup(false);
    if (config) {
      setShelfConfig(config);
    }
  };

  return (
    <div className={styles.App}>
      <h1>Veuillez créer une armoire virtuelle</h1>
      <button onClick={handleCreateClick}>Créer</button>
      {showPopup && <CreateShelfPopup onClose={handlePopupClose} />}
      {shelfConfig.rows > 0 && <Shelf rows={shelfConfig.rows} columns={shelfConfig.columns} />}
    </div>
  );
}

export default Home;
