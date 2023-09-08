import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./spec-buttons-container.module.css";

type SpecButtonsContainerType = {
  buttonPlaceholderText?: string;
  buttonPlaceholderText2?: string;

  /** Style props */
  specButtonsContainerWidth?: CSSProperties["width"];
};

const SpecButtonsContainer: NextPage<SpecButtonsContainerType> = ({
  buttonPlaceholderText,
  buttonPlaceholderText2,
  specButtonsContainerWidth,
}) => {
  const specButtonsContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: specButtonsContainerWidth,
    };
  }, [specButtonsContainerWidth]);

  return (
    <div
      className={styles.specbuttonscontainer}
      style={specButtonsContainerStyle}
    >
      <div className={styles.buttontype6}>
        <b className={styles.buttonType6}>{buttonPlaceholderText}</b>
      </div>
      <div className={styles.buttontype6}>
        <b className={styles.buttonType6}>{buttonPlaceholderText2}</b>
      </div>
    </div>
  );
};

export default SpecButtonsContainer;
