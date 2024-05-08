import styles from "./ItemNav.module.css";

interface Props {
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
}) => {
  return (
    <li className={styles.list}>
      <span
        onClick={handleClick}
        className={selectedItem === title ? styles.selected : ""}
      >
        <img src={imgUrl} alt={altImg} />
        {title}
      </span>
    </li>
  );
};
