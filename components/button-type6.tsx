import type { NextPage } from "next";
import styles from "./button-type6.module.css";

type ButtonType6Type = {
  documentImageUrl?: string;
};

const ButtonType6: NextPage<ButtonType6Type> = ({ documentImageUrl }) => {
  return (
    <div className={styles.buttontype6}>
      <b className={styles.buttonType6}>{buttonPlaceholderText2}</b>
    </div>
  );
};

export default ButtonType6;
