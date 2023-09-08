import type { NextPage } from "next";
import styles from "./market-selector.module.css";

type MarketSelectorType = {
  icons8Belgium1001?: string;
};

const MarketSelector: NextPage<MarketSelectorType> = ({
  icons8Belgium1001,
}) => {
  return (
    <div className={styles.marketselector}>
      <img
        className={styles.icons8Belgium1001}
        alt=""
        src={icons8Belgium1001}
      />
      <div className={styles.footerlabelitem}>
        <div className={styles.footerTextLabel}>belgium / Flemish</div>
      </div>
    </div>
  );
};

export default MarketSelector;
