import React from 'react';
import styles from '../styles/Shelf.module.css';

interface ShelfProps {
  rows: number;
  columns: number;
}

const Shelf: React.FC<ShelfProps> = ({ rows, columns }) => {
  const renderShelf = () => {
    let shelf: JSX.Element[] = [];
    for (let i = 0; i < rows; i++) {
      let row: JSX.Element[] = [];
      for (let j = 0; j < columns; j++) {
        row.push(<div key={`${i}-${j}`} className={styles.shelfCell}></div>);
      }
      shelf.push(
        <div key={i} className={styles.shelfRow}>
          {row}
        </div>
      );
    }
    return shelf;
  };

  return <div className={styles.shelfContainer}>{renderShelf()}</div>;
}

export default Shelf;
