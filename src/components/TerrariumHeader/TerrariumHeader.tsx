import styles from './TerrariumHeader.module.css'
import icon from "../../assets/svg/terrarium.icon.svg";


export const TerrariumHeader = () => {
  return (
    <picture className={styles.container}>
      <img src={icon} alt="Terrrium icon" />
      <figcaption>Terrarium</figcaption>
    </picture>
  );
};
