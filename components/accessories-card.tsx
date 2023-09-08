import type { NextPage } from "next";
import styles from "./accessories-card.module.css";

type AccessoriesCardType = {
  accessoryProdImage?: string;
};

const AccessoriesCard: NextPage<AccessoriesCardType> = ({
  accessoryProdImage,
}) => {
  return (
    <div className={styles.accessoriescard}>
      <div className={styles.cardbox}>
        <img
          className={styles.accessoryprodimageIcon}
          alt=""
          src={accessoryProdImage}
        />
        <div className={styles.accessories}>ACCESSORIES</div>
        <b className={styles.radiatorValveFv}>Radiator Valve FV</b>
        <div className={styles.shortProductDescription}>
          Short product description from (same as below the H1 title)
        </div>
      </div>
    </div>
  );
};

export default AccessoriesCard;
