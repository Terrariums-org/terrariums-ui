import styles from './HorizontalLine.module.css'

export const HorizontalLine = () => {
  return (
    <div className={styles.linesContainer}>
        <hr
          className={styles.horizontalLine}
          />
        <hr
          className={styles.horizontalLine}
        />
      </div>
  )
}
