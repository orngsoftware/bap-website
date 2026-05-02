import styles from './ImageGrid.module.css';

const IMAGE = '/home_image.png';

const cells = [
  { row: 0, col: 0, shape: 'roundedAll' },
  { row: 0, col: 1, shape: 'roundedAll' },
  { row: 0, col: 2, shape: 'halfRight'  },
  { row: 1, col: 0, shape: 'halfLeft'   },
  { row: 1, col: 1, shape: 'roundedAll' },
  { row: 1, col: 2, shape: 'halfRight'  },
  { row: 2, col: 0, shape: 'roundedAll' },
  { row: 2, col: 1, shape: 'roundedAll' },
  { row: 2, col: 2, shape: 'roundedAll' },
];

export default function ImageGrid() {
  return (
    <div className={styles.grid}>
      {cells.map(({ row, col, shape }) => (
        <div
          key={`${row}-${col}`}
          className={`${styles.cell} ${styles[shape]}`}
          style={{
            backgroundImage: `url(${IMAGE})`,
            '--col': col,
            '--row': row,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}