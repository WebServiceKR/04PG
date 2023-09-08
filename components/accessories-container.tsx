import type { NextPage } from "next";
import styles from "./accessories-container.module.css";
const AccessoriesContainer: NextPage = () => {
  return (
    <section className={styles.accessoriescontainer}>
      <div className={styles.h2sectiontitle}>
        <div className={styles.sectionTitle}>related accessories (product)</div>
      </div>
      <div className={styles.accessoriesrow}>
        <div className={styles.leftarrow}>
          <img
            className={styles.thinArrowLeft}
            alt=""
            src="/thin-arrow-left.svg"
          />
        </div>
        <div className={styles.accessoriescard}>
          <div className={styles.cardbox}>
            <img
              className={styles.accessoryprodimageIcon}
              alt=""
              src="/accessoryprodimage@2x.png"
            />
            <div className={styles.accessories}>ACCESSORIES</div>
            <b className={styles.radiatorValveFv}>Radiator Valve FV</b>
            <div className={styles.shortProductDescription}>
              Short product description from (same as below the H1 title)
            </div>
          </div>
        </div>
        <div className={styles.accessoriescard}>
          <div className={styles.cardbox}>
            <img
              className={styles.accessoryprodimageIcon}
              alt=""
              src="/accessoryprodimage@2x.png"
            />
            <div className={styles.accessories}>ACCESSORIES</div>
            <b className={styles.radiatorValveFv}>Radiator Valve FV</b>
            <div className={styles.shortProductDescription}>
              Short product description from (same as below the H1 title)
            </div>
          </div>
        </div>
        <div className={styles.accessoriescard}>
          <div className={styles.cardbox}>
            <img
              className={styles.accessoryprodimageIcon}
              alt=""
              src="/accessoryprodimage@2x.png"
            />
            <div className={styles.accessories}>ACCESSORIES</div>
            <b className={styles.radiatorValveFv}>Radiator Valve FV</b>
            <div className={styles.shortProductDescription}>
              Short product description from (same as below the H1 title)
            </div>
          </div>
        </div>
        <div className={styles.accessoriescard}>
          <div className={styles.cardbox}>
            <img
              className={styles.accessoryprodimageIcon}
              alt=""
              src="/accessoryprodimage@2x.png"
            />
            <div className={styles.accessories}>ACCESSORIES</div>
            <b className={styles.radiatorValveFv}>Radiator Valve FV</b>
            <div className={styles.shortProductDescription}>
              Short product description from (same as below the H1 title)
            </div>
          </div>
        </div>
        <div className={styles.rightarrow}>
          <img
            className={styles.thinArrowLeft}
            alt=""
            src="/thin-arrow-right.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default AccessoriesContainer;
