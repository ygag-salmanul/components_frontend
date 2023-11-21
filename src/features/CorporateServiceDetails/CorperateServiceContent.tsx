import React from "react";
import styles from "./CorperateServiceDetails.module.scss";

const CorperateServiceContent = () => {
  return (
    <div className={styles["corperate-service-content"]}>
      <h2 className={styles["corperate-service-content__title"]}>
        <span className={styles["corperate-service-content__title--highlight"]}>
          Gift Cards
        </span>
        <br />
        The Inside Scoop
      </h2>
      <h6 className={styles["corperate-service-content__sub-heading"]}>
        It’s Digital, Seamless & Quick
      </h6>
      <p className={styles["corperate-service-content__description"]}>
        Experience the ultimate shopping with Nakheel mall Gift Cards! Our Gift
        Cards are your passport to the diverse world of retail within our mall.
        When you purchase one of our Gift Cards, you're not just giving a
        present; you're gifting an unforgettable experience. <br />
        <br /> Simply load your Gift Card with your preferred amount, and you're
        ready to explore our myriad of stores. <br />
        <br /> Present your card at checkout, and watch your purchase expenses
        subtract from the card's balance. For added convenience, check your
        card's balance online as needed. <br />
        <br /> Treat yourself or your loved ones to an exceptional Nakheel mall
        adventure with our Gift Cards—the perfect way to celebrate any occasion.
      </p>
    </div>
  );
};

export default CorperateServiceContent;
