import type { NextPage } from "next";
import styles from "./product-info-container.module.css";
const ProductInfoContainer: NextPage = () => {
  return (
    <section className={styles.productinfocontainer}>
      <div className={styles.productinfobox}>
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
            <div className={styles.productBenefitName}>
              Product benefit name
            </div>
          </div>
          <div className={styles.buttonbox}>
            <button className={styles.buttontype1}>
              <b className={styles.buttonType1}>heat output calculator</b>
            </button>
            <div className={styles.buttontype5}>
              <b className={styles.buttonType5}>↘ dop download</b>
            </div>
          </div>
        </div>
        <div className={styles.imagebox}>
          <img
            className={styles.prodimage420Icon}
            alt=""
            src="/prodimage420@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductInfoContainer;
