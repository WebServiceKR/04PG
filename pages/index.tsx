import type { NextPage } from "next";
import { useState } from "react";
import SideMenuOverlay from "../components/side-menu-overlay";
import PortalPopup from "../components/portal-popup";
import HeaderContainer from "../components/header-container";
import ProductInfoContainer from "../components/product-info-container";
import ProdSubNavContainer from "../components/prod-sub-nav-container";
import TextNarrowColumn from "../components/text-narrow-column";
import SpecButtonsContainer from "../components/spec-buttons-container";
import SpecificationsTable from "../components/specifications-table";
import HoverStateDefault from "../components/hover-state-default";
import AccessoriesContainer from "../components/accessories-container";
import ContactOptionsContainer from "../components/contact-options-container";
import FooterContainer from "../components/footer-container";
import styles from "./index.module.css";
const PDPSpecifications: NextPage = () => {
  const [isSideMenuOverlayOpen, setSideMenuOverlayOpen] = useState(false);
  return (
    <div className={styles.pdpspecifications}>
      <HeaderContainer dimensionCode="/purmologo.svg" />
      <ProductInfoContainer />
      <ProdSubNavContainer
        inspirationList="Inspiration"
        underlineBar
        prodSubNavContainerWidth="unset"
        prodSubNavContainerAlignSelf="stretch"
        subNavItemCursor="unset"
        subNavItemBorder="unset"
        subNavItemBackgroundColor="unset"
        subNavItemBoxSizing="border-box"
        overviewDisplay="inline-block"
        underlineBarBackgroundColor="#3e909f"
        showUnderlineBar
      />
      <div className={styles.maincontentcontainter}>
        <div className={styles.h2sectiontitle}>
          <div className={styles.sectionTitle}>specifications</div>
        </div>
        <TextNarrowColumn textNarrowColumnWidth="100%" />
        <SpecButtonsContainer
          buttonPlaceholderText="↘ product datasheet"
          buttonPlaceholderText2="↘ prescription texts"
          specButtonsContainerWidth="100%"
        />
        <SpecificationsTable specificationsTableWidth="100%" />
        <HoverStateDefault
          buttonText="load more "
          hoverStateDefaultCursor="unset"
          hoverStateDefaultWidth="unset"
          rEADMOREDisplay="inline-block"
        />
      </div>
      <AccessoriesContainer />
      <ContactOptionsContainer
        iconTechAdv="/icontechadv.svg"
        iconDiscuss="/icondiscuss.svg"
      />
      <FooterContainer itemCode="/icons8belgium100-1.svg" />
    </div>
  );
};

export default PDPSpecifications;
