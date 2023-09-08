import type { NextPage } from "next";
import styles from "./contact-options-container.module.css";

type ContactOptionsContainerType = {
  iconTechAdv?: string;
  iconDiscuss?: string;
};

const ContactOptionsContainer: NextPage<ContactOptionsContainerType> = ({
  iconTechAdv,
  iconDiscuss,
}) => {
  return (
    <section className={styles.contactoptionscontainer}>
      <div className={styles.h2sectiontitle}>
        <div className={styles.sectionTitle}>how can we help you?</div>
      </div>
      <div className={styles.iconmodules}>
        <div className={styles.iconframe1}>
          <img className={styles.icontechadv} alt="" src={iconTechAdv} />
          <b className={styles.technicalAdvice}>Technical Advice</b>
          <div className={styles.getAdviceFrom}>
            Get advice from our experts.
          </div>
          <button className={styles.buttontype4}>
            <b className={styles.readMore}>contact</b>
          </button>
        </div>
        <div className={styles.iconframe1}>
          <img className={styles.icontechadv} alt="" src="/iconoffers.svg" />
          <b className={styles.technicalAdvice}>Offers or Prices</b>
          <div className={styles.getAdviceFrom}>
            Ask for individual project offers.
          </div>
          <button className={styles.buttontype4}>
            <b className={styles.readMore}>contact</b>
          </button>
        </div>
        <div className={styles.iconframe1}>
          <img className={styles.icontechadv} alt="" src={iconDiscuss} />
          <b className={styles.technicalAdvice}>Discuss a Project</b>
          <div className={styles.getAdviceFrom}>
            Contact us to get fast support.
          </div>
          <button className={styles.buttontype4}>
            <b className={styles.readMore}>contact</b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactOptionsContainer;
