import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./specifications-table.module.css";

type SpecificationsTableType = {
  /** Style props */
  specificationsTableWidth?: CSSProperties["width"];
};

const SpecificationsTable: NextPage<SpecificationsTableType> = ({
  specificationsTableWidth,
}) => {
  const specificationsTableStyle: CSSProperties = useMemo(() => {
    return {
      width: specificationsTableWidth,
    };
  }, [specificationsTableWidth]);

  return (
    <div
      className={styles.specificationstable}
      style={specificationsTableStyle}
    >
      <div className={styles.rowa}>
        <div className={styles.parameterUnit}>Parameter [Unit]:</div>
        <div className={styles.parameterUnit}>Parameter values from PIM</div>
      </div>
      <div className={styles.rowb}>
        <div className={styles.parameterUnit}>Parameter [Unit]:</div>
        <div className={styles.parameterUnit}>Parameter values from PIM</div>
      </div>
      <div className={styles.rowa}>
        <div className={styles.parameterUnit}>Parameter [Unit]:</div>
        <div className={styles.parameterUnit}>Parameter values from PIM</div>
      </div>
      <div className={styles.rowb}>
        <div className={styles.parameterUnit}>Parameter [Unit]:</div>
        <div className={styles.parameterUnit}>Parameter values from PIM</div>
      </div>
      <div className={styles.rowa}>
        <div className={styles.parameterUnit}>Parameter [Unit]:</div>
        <div className={styles.parameterUnit}>Parameter values from PIM</div>
      </div>
      <div className={styles.rowb}>
        <div className={styles.parameterUnit}>Parameter [Unit]:</div>
        <div className={styles.parameterUnit}>Parameter values from PIM</div>
      </div>
      <div className={styles.rowa}>
        <div className={styles.parameterUnit}>Parameter [Unit]:</div>
        <div className={styles.parameterUnit}>Parameter values from PIM</div>
      </div>
      <div className={styles.rowb}>
        <div className={styles.parameterUnit}>Parameter [Unit]:</div>
        <div className={styles.parameterUnit}>Parameter values from PIM</div>
      </div>
      <div className={styles.rowa}>
        <div className={styles.parameterUnit}>Parameter [Unit]:</div>
        <div className={styles.parameterUnit}>Parameter values from PIM</div>
      </div>
      <div className={styles.rowb}>
        <div className={styles.parameterUnit}>Parameter [Unit]:</div>
        <div className={styles.parameterUnit}>Parameter values from PIM</div>
      </div>
    </div>
  );
};

export default SpecificationsTable;
