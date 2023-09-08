import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./side-menu-overlay.module.css";

type SideMenuOverlayType = {
  onClose?: () => void;
};

const SideMenuOverlay: NextPage<SideMenuOverlayType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.sidemenuoverlay} data-animate-on-scroll>
      <div className={styles.closeiconcontainer}>
        <div className={styles.overlayheaderbar}>
          <img className={styles.purmologoIcon} alt="" src="/purmologo1.svg" />
          <button className={styles.closeicon}>
            <img className={styles.unionIcon} alt="" src="/union.svg" />
          </button>
        </div>
      </div>
      <div className={styles.scrollingcontainer}>
        <div className={styles.mainlinks}>
          <div className={styles.sidemenuaccordeon}>
            <div className={styles.sidemenuitem}>
              <b className={styles.subitemOfSidemenu}>Products</b>
              <div className={styles.chevron}>
                <img
                  className={styles.thinArrowRight}
                  alt=""
                  src="/thin-arrow-right1.svg"
                />
              </div>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>Radiators</b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>
                Convectors and fan coil units
              </b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>
                underfloor heating and cooling
              </b>
            </div>
          </div>
          <div className={styles.sidemenuaccordeon}>
            <div className={styles.sidemenuitem}>
              <b className={styles.subitemOfSidemenu}>solutions</b>
              <div className={styles.chevron}>
                <img
                  className={styles.thinArrowRight}
                  alt=""
                  src="/thin-arrow-right1.svg"
                />
              </div>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>new building</b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>renovation</b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>residential buildings</b>
            </div>
          </div>
          <div className={styles.sidemenuaccordeon}>
            <div className={styles.sidemenuitem}>
              <b className={styles.subitemOfSidemenu}>calculators</b>
              <div className={styles.chevron}>
                <img
                  className={styles.thinArrowRight}
                  alt=""
                  src="/thin-arrow-right1.svg"
                />
              </div>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>for radiators</b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>for electric heating</b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>for underfloor heating</b>
            </div>
          </div>
          <div className={styles.sidemenuaccordeon}>
            <div className={styles.sidemenuitem}>
              <b className={styles.subitemOfSidemenu}>downloads</b>
              <div className={styles.chevron}>
                <img
                  className={styles.thinArrowRight}
                  alt=""
                  src="/thin-arrow-right1.svg"
                />
              </div>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>downloads search</b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>
                SubItem of SideMenu Two
              </b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>
                SubItem of SideMenu Three
              </b>
            </div>
          </div>
          <div className={styles.sidemenuaccordeon}>
            <div className={styles.sidemenuitem}>
              <b className={styles.subitemOfSidemenu}>services</b>
              <div className={styles.chevron}>
                <img
                  className={styles.thinArrowRight}
                  alt=""
                  src="/thin-arrow-right1.svg"
                />
              </div>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>
                planning and calculations
              </b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>after-sales service</b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>
                SubItem of SideMenu Three
              </b>
            </div>
          </div>
        </div>
        <div className={styles.mainlinks}>
          <div className={styles.sidemenuaccordeon}>
            <div className={styles.sidemenuitem}>
              <b className={styles.subitemOfSidemenu}>contact</b>
              <div className={styles.chevron}>
                <img
                  className={styles.thinArrowRight}
                  alt=""
                  src="/thin-arrow-right1.svg"
                />
              </div>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>contact form</b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>
                register for email newsletter
              </b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>where and how to buy?</b>
            </div>
          </div>
          <div className={styles.sidemenuaccordeon}>
            <div className={styles.sidemenuitem}>
              <b className={styles.subitemOfSidemenu}>knowledge</b>
              <div className={styles.chevron}>
                <img
                  className={styles.thinArrowRight}
                  alt=""
                  src="/thin-arrow-right1.svg"
                />
              </div>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>videos</b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>trainings and webinars</b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>fAQ</b>
            </div>
          </div>
          <div className={styles.sidemenuitem14}>
            <b className={styles.subitemOfSidemenu}>Blog</b>
          </div>
          <div className={styles.sidemenuitem14}>
            <b className={styles.subitemOfSidemenu}>reference cases</b>
          </div>
          <div className={styles.sidemenuaccordeon}>
            <div className={styles.sidemenuitem}>
              <b className={styles.subitemOfSidemenu}>about us</b>
              <div className={styles.chevron}>
                <img
                  className={styles.thinArrowRight}
                  alt=""
                  src="/thin-arrow-right1.svg"
                />
              </div>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>history</b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>CSR and sustainability</b>
            </div>
            <div className={styles.subsidemenuitem}>
              <b className={styles.subitemOfSidemenu}>working at purmo</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuOverlay;
