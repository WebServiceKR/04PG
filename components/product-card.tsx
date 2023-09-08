import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ButtonType1 from "./button-type1";
import ButtonType5 from "./button-type5";
import styles from "./product-card.module.css";

type ProductCardType = {
  /** Style props */
  buttonType5Display?: CSSProperties["display"];
};

const ProductCard: NextPage<ProductCardType> = ({ buttonType5Display }) => {
  const buttonType11Style: CSSProperties = useMemo(() => {
    return {
      display: buttonType5Display,
    };
  }, [buttonType5Display]);

  return (
    <div className={styles.prodlabelbox}>
      <div className={styles.producttitle}>
        <div className={styles.productName}>product name</div>
      </div>
      <div className={styles.descriptiontext}>
        <b className={styles.productShortDescription}>
          Product short description
        </b>
      </div>
      <div className={styles.benefitline}>
        <img className={styles.checkicon} alt="" src="/checkicon.svg" />
        <div className={styles.productBenefitName}>Product benefit name</div>
      </div>
      <div className={styles.buttonbox}>
        <ButtonType1 />
        <ButtonType5 />
      </div>
    </div>
  );
};

export default ProductCard;
