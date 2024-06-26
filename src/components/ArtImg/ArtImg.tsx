import { memo } from "react";
import styles from "./ArtImg.module.css";

interface Props {
  urlImg: string;
  altImg: string;
}

export const ArtImg: React.FC<Props> = memo(({ urlImg, altImg }) => {
  return (
    <picture className={styles.containerImg}>
      <img src={urlImg} alt={altImg} className={styles.img} />
    </picture>
  );
});
