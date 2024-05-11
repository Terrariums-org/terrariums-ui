import styles from "./ItemNav.module.css";

interface Props {
  nameSelected?: string;
  selectedItem?: string;
  title: string;
  imgUrl: string;
  altImg: string;
  handleClick: () => void;
}

export const ItemNav: React.FC<Props> = ({
  title,
  imgUrl,
  altImg,
  selectedItem,
  handleClick,
  nameSelected = "",
}) => {
  return (
    <li className={styles.list}>
      <span
        onClick={handleClick}
        className={selectedItem === nameSelected ? styles.selected : ""}
      >
        <img src={imgUrl} alt={altImg} />
        {title}
      </span>
    </li>
  );
};
