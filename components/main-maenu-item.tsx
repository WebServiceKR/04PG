import type { NextPage } from "next";
import styles from "./main-maenu-item.module.css";

type MainMaenuItemType = {
  menuItemText?: string;
};

const MainMaenuItem: NextPage<MainMaenuItemType> = ({ menuItemText }) => {
  return (
    <div className={styles.mainmaenuitem}>
      <b className={styles.menuitem}>{menuItemText}</b>
    </div>
  );
};

export default MainMaenuItem;
