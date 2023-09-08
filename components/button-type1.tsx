import type { NextPage } from "next";
import styles from "./button-type1.module.css";
const ButtonType1: NextPage = () => {
  return (
    <button className={styles.buttontype1}>
      <b className={styles.buttonType1} style={buttonType11Style}>
        heat output calculator
      </b>
    </button>
  );
};

export default ButtonType1;
