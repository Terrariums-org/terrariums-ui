import styles from "./TerrariumInput.module.css";
import SearchSvg from "../../../../assets/svg/search.svg";

interface Props {
  addFilterKey: (key: string) => void;
}

export const TerrariumInput: React.FC<Props> = ({ addFilterKey }) => {
  return (
    <div className={styles.containerInput}>
      <img src={SearchSvg} />
      <input
        type="text"
        placeholder="Buscar registro..."
        onChange={(e) => addFilterKey(e.target.value)}
      />
    </div>
  );
};
