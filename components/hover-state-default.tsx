import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./hover-state-default.module.css";

type HoverStateDefaultType = {
  buttonText?: string;

  /** Style props */
  hoverStateDefaultCursor?: CSSProperties["cursor"];
  hoverStateDefaultWidth?: CSSProperties["width"];
  rEADMOREDisplay?: CSSProperties["display"];
};

const HoverStateDefault: NextPage<HoverStateDefaultType> = ({
  buttonText,
  hoverStateDefaultCursor,
  hoverStateDefaultWidth,
  rEADMOREDisplay,
}) => {
  const hoverStateDefaultStyle: CSSProperties = useMemo(() => {
    return {
      cursor: hoverStateDefaultCursor,
      width: hoverStateDefaultWidth,
    };
  }, [hoverStateDefaultCursor, hoverStateDefaultWidth]);

  const rEADMOREStyle: CSSProperties = useMemo(() => {
    return {
      display: rEADMOREDisplay,
    };
  }, [rEADMOREDisplay]);

  return (
    <div className={styles.hoverstatedefault} style={hoverStateDefaultStyle}>
      <b className={styles.readMore} style={rEADMOREStyle}>
        {buttonText}
      </b>
    </div>
  );
};

export default HoverStateDefault;
