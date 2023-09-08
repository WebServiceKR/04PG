import type { NextPage } from "next";
import { useState, useCallback } from "react";
import SideMenuOverlay from "./side-menu-overlay";
import PortalPopup from "./portal-popup";
import styles from "./header-container.module.css";

type HeaderContainerType = {
  dimensionCode?: string;
};

const HeaderContainer: NextPage<HeaderContainerType> = ({ dimensionCode }) => {
  const [isSideMenuOverlayOpen, setSideMenuOverlayOpen] = useState(false);

  const openSideMenuOverlay = useCallback(() => {
    setSideMenuOverlayOpen(true);
  }, []);

  const closeSideMenuOverlay = useCallback(() => {
    setSideMenuOverlayOpen(false);
  }, []);

  return (
    <>
      <header className={styles.headercontainer}>
        <div className={styles.hubnavbar}>
          <div className={styles.hubmenu}>
            <div className={styles.specifierhubmenuitem}>
              <img
                className={styles.specifiericon}
                alt=""
                src="/specifiericon.svg"
              />
              <b className={styles.specifier}>SPECIFIER</b>
            </div>
            <div className={styles.specifierhubmenuitem}>
              <img
                className={styles.specifiericon}
                alt=""
                src="/installericon.svg"
              />
              <b className={styles.specifier}>INSTALLER</b>
            </div>
            <div className={styles.specifierhubmenuitem}>
              <img
                className={styles.specifiericon}
                alt=""
                src="/endusericon.svg"
              />
              <b className={styles.specifier}>ENDUSER</b>
            </div>
          </div>
        </div>
        <div className={styles.headercontent}>
          <div className={styles.headerbar}>
            <img className={styles.purmologoIcon} alt="" src={dimensionCode} />
            <div className={styles.navsicons}>
              <section className={styles.horizontalnavlinks}>
                <div className={styles.mainmaenuitem}>
                  <b className={styles.menuitem}>products</b>
                </div>
                <div className={styles.mainmaenuitem}>
                  <b className={styles.menuitem}>solutions</b>
                </div>
                <div className={styles.mainmaenuitem}>
                  <b className={styles.menuitem}>calculators</b>
                </div>
                <div className={styles.mainmaenuitem}>
                  <b className={styles.menuitem}>downloads</b>
                </div>
                <div className={styles.mainmaenuitem}>
                  <b className={styles.menuitem}>services</b>
                </div>
              </section>
              <div className={styles.searchnavbar}>
                <button className={styles.searchicon}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/search-icon.svg"
                  />
                </button>
                <button
                  className={styles.hamburgericon}
                  onClick={openSideMenuOverlay}
                >
                  <div className={styles.hamb1} />
                  <div className={styles.hamb1} />
                  <div className={styles.hamb1} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.gradientbarregular}>
          <div className={styles.gradient} />
        </div>
      </header>
      {isSideMenuOverlayOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSideMenuOverlay}
        >
          <SideMenuOverlay onClose={closeSideMenuOverlay} />
        </PortalPopup>
      )}
    </>
  );
};

export default HeaderContainer;
