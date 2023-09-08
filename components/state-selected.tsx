import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./state-selected.module.css";

type StateSelectedType = {
  sectionTitle?: string;
  showUnderlineBar?: boolean;

  /** Style props */
  stateSelectedCursor?: CSSProperties["cursor"];
  stateSelectedBorder?: CSSProperties["border"];
  stateSelectedBackgroundColor?: CSSProperties["backgroundColor"];
  stateSelectedBoxSizing?: CSSProperties["boxSizing"];
  overviewDisplay?: CSSProperties["display"];
  underlineBarBackgroundColor?: CSSProperties["backgroundColor"];
};

const StateSelected: NextPage<StateSelectedType> = ({
  sectionTitle,
  showUnderlineBar,
  stateSelectedCursor,
  stateSelectedBorder,
  stateSelectedBackgroundColor,
  stateSelectedBoxSizing,
  overviewDisplay,
  underlineBarBackgroundColor,
}) => {
  const stateSelectedStyle: CSSProperties = useMemo(() => {
    return {
      cursor: stateSelectedCursor,
      border: stateSelectedBorder,
      backgroundColor: stateSelectedBackgroundColor,
      boxSizing: stateSelectedBoxSizing,
    };
  }, [
    stateSelectedCursor,
    stateSelectedBorder,
    stateSelectedBackgroundColor,
    stateSelectedBoxSizing,
  ]);

  const overviewStyle: CSSProperties = useMemo(() => {
    return {
      display: overviewDisplay,
    };
  }, [overviewDisplay]);

  const underlineBarStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: underlineBarBackgroundColor,
    };
  }, [underlineBarBackgroundColor]);

  return (
    <div className={styles.stateselected} style={stateSelectedStyle}>
      <b className={styles.overview} style={overviewStyle}>
        {sectionTitle}
      </b>
      {showUnderlineBar && (
        <div className={styles.underlinebar} style={underlineBarStyle} />
      )}
    </div>
  );
};

export default StateSelected;
