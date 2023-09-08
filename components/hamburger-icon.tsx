import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties, useCallback } from "react";
import SideMenuOverlay from "./side-menu-overlay";
import PortalDrawer from "./portal-drawer";
import styles from "./hamburger-icon.module.css";

type HamburgerIconType = {
  /** Style props */
  hamburgerIconBoxSizing?: CSSProperties["boxSizing"];
  hamb1BackgroundColor?: CSSProperties["backgroundColor"];
  hamb2BackgroundColor?: CSSProperties["backgroundColor"];
  hamb3BackgroundColor?: CSSProperties["backgroundColor"];
};

const HamburgerIcon: NextPage<HamburgerIconType> = ({
  hamburgerIconBoxSizing,
  hamb1BackgroundColor,
  hamb2BackgroundColor,
  hamb3BackgroundColor,
}) => {
  const hamburgerIconStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: hamburgerIconBoxSizing,
    };
  }, [hamburgerIconBoxSizing]);

  const hamb1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: hamb1BackgroundColor,
    };
  }, [hamb1BackgroundColor]);

  const hamb2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: hamb2BackgroundColor,
    };
  }, [hamb2BackgroundColor]);

  const hamb3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: hamb3BackgroundColor,
    };
  }, [hamb3BackgroundColor]);

  const [isSideMenuOverlayOpen, setSideMenuOverlayOpen] = useState(false);

  const openSideMenuOverlay = useCallback(() => {
    setSideMenuOverlayOpen(true);
  }, []);

  const closeSideMenuOverlay = useCallback(() => {
    setSideMenuOverlayOpen(false);
  }, []);

  return (
    <>
      <button
        className={styles.hamburgericon}
        onClick={openSideMenuOverlay}
        style={hamburgerIconStyle}
      >
        <div className={styles.hamb1} style={hamb1Style} />
        <div className={styles.hamb1} style={hamb2Style} />
        <div className={styles.hamb1} style={hamb3Style} />
      </button>
      {isSideMenuOverlayOpen && (
        <PortalDrawer
          overlayColor="rgba(0, 41, 46, 0.7)"
          placement="Right"
          onOutsideClick={closeSideMenuOverlay}
        >
          <SideMenuOverlay onClose={closeSideMenuOverlay} />
        </PortalDrawer>
      )}
    </>
  );
};

export default HamburgerIcon;
