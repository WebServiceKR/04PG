import type { NextPage } from "next";
import styles from "./footer-container.module.css";

type FooterContainerType = {
  itemCode?: string;
};

const FooterContainer: NextPage<FooterContainerType> = ({ itemCode }) => {
  return (
    <footer className={styles.footercontainer}>
      <div className={styles.footercolumnsbox}>
        <div className={styles.footertextbox}>
          <b className={styles.introducingPurmoComfortDeliContainer}>
            <p className={styles.introducingPurmo}>Introducing Purmo</p>
            <p
              className={styles.introducingPurmo}
            >{`Comfort delivered is our promise. `}</p>
          </b>
          <div className={styles.helpingAllPurmo}>
            Helping all Purmo customers to easily create and enjoy sustainable
            indoor climate comfort is our mission. At Purmo we believe that the
            perfect indoor climate shouldn´t cost the planet´s climate. That is
            why we are leading the way with innovative heating and cooling
            solutions which help to create the great indoors.
          </div>
          <b className={styles.introducingPurmoComfortDeliContainer}>
            Keep up-to-date
          </b>
          <div className={styles.helpingAllPurmo}>
            Our free E-mail-Newsletter informs you about price changes,
            technical changes, new downloads, new products, promotions, trade
            fairs and customer events.
          </div>
          <b className={styles.subscribe}>subscribe</b>
        </div>
        <div className={styles.footerproductbox}>
          <div className={styles.footeritemtitle}>
            <b className={styles.products}>products</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>radiators</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>convectors and fan coil units</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>underfloor heating and cooling</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>wall heating and cooling</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>Ceiling heating and cooling</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>tap water systems</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>heat pumps</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>ventilation</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>chimneys</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>electric heating</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>electric controls</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>hydronic controls</b>
          </div>
        </div>
        <div className={styles.footerproductbox}>
          <div className={styles.footeritemtitle}>
            <b className={styles.products}>useful links</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>downloads</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>calculators</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>services</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>solutions</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>contact</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>reference projects</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>knowledge</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>blog</b>
          </div>
          <div className={styles.productfooteritem}>
            <b className={styles.products}>about us</b>
          </div>
        </div>
      </div>
      <div className={styles.footersocialicons}>
        <img className={styles.facebookIcon} alt="" src="/facebook-icon.svg" />
        <img className={styles.facebookIcon} alt="" src="/instagram-icon.svg" />
        <img className={styles.facebookIcon} alt="" src="/linked-in-icon.svg" />
        <img className={styles.facebookIcon} alt="" src="/you-tube-icon.svg" />
        <img className={styles.facebookIcon} alt="" src="/vimeo-icon.svg" />
      </div>
      <div className={styles.footerlinks}>
        <div className={styles.footerlabelitem}>
          <div className={styles.footerTextLabel}>sitemap</div>
        </div>
        <div className={styles.footerlabelitem}>
          <div className={styles.footerTextLabel}>privacy policy</div>
        </div>
        <div className={styles.footerlabelitem}>
          <div className={styles.footerTextLabel}>term and conditions</div>
        </div>
        <div className={styles.footerlabelitem}>
          <div className={styles.footerTextLabel}>imprint</div>
        </div>
        <div className={styles.footerlabelitem}>
          <div className={styles.footerTextLabel}>cookie settings</div>
        </div>
      </div>
      <div className={styles.footerbottomline}>
        <div className={styles.marketselector}>
          <img className={styles.icons8Belgium1001} alt="" src={itemCode} />
          <div className={styles.footerlabelitem}>
            <div className={styles.footerTextLabel}>belgium / Flemish</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
