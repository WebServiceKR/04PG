import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./text-narrow-column.module.css";

type TextNarrowColumnType = {
  /** Style props */
  textNarrowColumnWidth?: CSSProperties["width"];
};

const TextNarrowColumn: NextPage<TextNarrowColumnType> = ({
  textNarrowColumnWidth,
}) => {
  const textNarrowColumnStyle: CSSProperties = useMemo(() => {
    return {
      width: textNarrowColumnWidth,
    };
  }, [textNarrowColumnWidth]);

  return (
    <div className={styles.textnarrowcolumn} style={textNarrowColumnStyle}>
      <div className={styles.textnarrow}>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Enim non ac erat posuere
          bibendum facilisi. Quis vitae eget lobortis etiam. Aliquam massa massa
          cum in auctor id duis varius. Porta sed praesent purus ac id ipsum a
          netus sed.
        </div>
      </div>
    </div>
  );
};

export default TextNarrowColumn;
