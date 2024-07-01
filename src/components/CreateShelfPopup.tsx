import React, { useState } from 'react';
import styles from '../styles/CreateShelfPopup.module.css';

interface CreateShelfPopupProps {
  onClose: (config?: { rows: number, columns: number }) => void;
}

const CreateShelfPopup: React.FC<CreateShelfPopupProps> = ({ onClose }) => {
  const [rows, setRows] = useState<number>(0);
  const [columns, setColumns] = useState<number>(0);

  const handleRowsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRows(parseInt(e.target.value, 10));
  };

  const handleColumnsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumns(parseInt(e.target.value, 10));
  };

  const handleSubmit = () => {
    onClose({ rows, columns });
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <h2>Créer une armoire virtuelle</h2>
        <label>
          Nombre de lignes:
          <input type="number" value={rows} onChange={handleRowsChange} />
        </label>
        <label>
          Nombre de cases par ligne:
          <input type="number" value={columns} onChange={handleColumnsChange} />
        </label>
        <button onClick={handleSubmit}>Valider</button>
      </div>
    </div>
  );
}

export default CreateShelfPopup;
