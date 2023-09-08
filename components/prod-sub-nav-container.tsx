import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./prod-sub-nav-container.module.css";

type ProdSubNavContainerType = {
  inspirationList?: string;
  underlineBar?: boolean;
  showUnderlineBar?: boolean;

  /** Style props */
  prodSubNavContainerWidth?: CSSProperties["width"];
  prodSubNavContainerAlignSelf?: CSSProperties["alignSelf"];
  subNavItemCursor?: CSSProperties["cursor"];
  subNavItemBorder?: CSSProperties["border"];
  subNavItemBackgroundColor?: CSSProperties["backgroundColor"];
  subNavItemBoxSizing?: CSSProperties["boxSizing"];
  overviewDisplay?: CSSProperties["display"];
  underlineBarBackgroundColor?: CSSProperties["backgroundColor"];
};

const ProdSubNavContainer: NextPage<ProdSubNavContainerType> = ({
  inspirationList,
  underlineBar,
  prodSubNavContainerWidth,
  prodSubNavContainerAlignSelf,
  subNavItemCursor,
  subNavItemBorder,
  subNavItemBackgroundColor,
  subNavItemBoxSizing,
  overviewDisplay,
  underlineBarBackgroundColor,
  showUnderlineBar,
}) => {
  const prodSubNavContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: prodSubNavContainerWidth,
      alignSelf: prodSubNavContainerAlignSelf,
    };
  }, [prodSubNavContainerWidth, prodSubNavContainerAlignSelf]);

  const subNavItemStyle: CSSProperties = useMemo(() => {
    return {
      cursor: subNavItemCursor,
      border: subNavItemBorder,
      backgroundColor: subNavItemBackgroundColor,
      boxSizing: subNavItemBoxSizing,
    };
  }, [
    subNavItemCursor,
    subNavItemBorder,
    subNavItemBackgroundColor,
    subNavItemBoxSizing,
  ]);

  const overview1Style: CSSProperties = useMemo(() => {
    return {
      display: overviewDisplay,
    };
  }, [overviewDisplay]);

  const underlineBar1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: underlineBarBackgroundColor,
    };
  }, [underlineBarBackgroundColor]);

  return (
    <nav
      className={styles.prodsubnavcontainer}
      style={prodSubNavContainerStyle}
    >
      <div className={styles.productsubnav}>
        <button className={styles.subnavitem} style={subNavItemStyle}>
          <b className={styles.overview} style={overview1Style}>
            Specifications
          </b>
          {!underlineBar && (
            <div className={styles.underlinebar} style={underlineBar1Style} />
          )}
        </button>
        <button className={styles.subnavitem}>
          <b className={styles.overview}>Installation</b>
          <div className={styles.underlinebar1} />
        </button>
        <button className={styles.subnavitem}>
          <b className={styles.overview}>Downloads</b>
          <div className={styles.underlinebar1} />
        </button>
        <button className={styles.subnavitem}>
          <b className={styles.overview}>Calculations</b>
          <div className={styles.underlinebar1} />
        </button>
        <button className={styles.subnavitem}>
          <b className={styles.overview}>Items</b>
          <div className={styles.underlinebar1} />
        </button>
        <button className={styles.subnavitem}>
          <b className={styles.overview}>{inspirationList}</b>
          <div className={styles.underlinebar1} />
        </button>
      </div>
      <div className={styles.subnavline} />
    </nav>
  );
};

export default ProdSubNavContainer;
