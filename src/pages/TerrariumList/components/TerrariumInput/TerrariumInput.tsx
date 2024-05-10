import styles from './TerrariumInput.module.css'
import SearchSvg from "../../../../assets/svg/search.svg";


export const TerrariumInput = () => {
  return (
    <div className={styles.containerInput}>
      <img src={SearchSvg} />
      <input type="text" placeholder='Buscar registro...'/>
    </div>
  );
};
