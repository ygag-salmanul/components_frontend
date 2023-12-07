import styles from "./FaqQa.module.scss";

const FaqQa = () => {
  return (
    <div className={`${styles["content"]} wrapper`}>
      <div className="">
        <p className={styles["content__p"]}>Lorem Ipsum</p>
        <h3 className={styles["content__main"]}>Heading Text Here</h3>
      </div>
      <div className={styles["content__description-container"]}>
        <div className="">
          <p
            className={styles["content__description-container__heading"]}
          >Offers and Benefits :

          </p>
          <p
            className={styles["content__description-container__description"]}
          >Welcome to a world of exclusive offers and unparalleled benefits designed just for you. Our commitment is to enhance your experience and provide added value to every interaction. Explore the array of offers and benefits tailored to make your journey with us truly rewarding.</p>
        </div>
        <div className="">
          <p
            className={styles["content__description-container__heading"]}
          >Exclusive Offers :

          </p>
          <p
            className={styles["content__description-container__description"]}
          >Discover a curated selection of exclusive offers crafted to elevate your experience. From special discounts to limited-time promotions, each offer is designed to bring you added value and savings. Keep an eye on this space for regularly updated and exciting opportunities.</p>
        </div>
        <div className="">
          <p
            className={styles["content__description-container__heading"]}
          >Membership Rewards:
          </p>
          <p
            className={styles["content__description-container__description"]}
          >As a valued member, you are entitled to our Membership Rewards program. Earn points with every interaction, and redeem them for a variety of rewards—from travel perks to lifestyle products. The more you engage with us, the more you unlock a world of possibilities.</p>
        </div>
        <div className="">
          <p
            className={styles["content__description-container__heading"]}
          >Personalized Services:

          </p>
          <p
            className={styles["content__description-container__description"]}
          >Enjoy personalized services that cater to your unique preferences. Our team is dedicated to ensuring that your experience is tailored to your needs, providing a level of service that goes beyond expectations.</p>
        </div>
        <div className="">
          <p
            className={styles["content__description-container__heading"]}
          >Early Access and Priority Services :

          </p>
          <p
            className={styles["content__description-container__description"]}
          >Be among the first to access new releases, events, and services. With our priority services, you&apos;ll always have a front-row seat to the latest and greatest. Stay ahead of the curve and indulge in the benefits of being a valued member.</p>
        </div>
        <div className="">
          <p
            className={styles["content__description-container__heading"]}
          >Loyalty Programs:

          </p>
          <p
            className={styles["content__description-container__description"]}
          >Explore our loyalty programs designed to express our gratitude for your continued patronage. Benefit from tiered memberships, exclusive privileges, and special surprises that acknowledge your loyalty.</p>
        </div>
        <div className="">
          <p
            className={styles["content__description-container__heading"]}
          >Financial Rewards:

          </p>
          <p
            className={styles["content__description-container__description"]}
          >In addition to experiential rewards, our financial benefits are designed to maximize your savings and financial well-being. Avail yourself of special interest rates, reduced fees, and other financial perks that contribute to your overall prosperity.</p>
        </div>
        <div className={styles["content__description-container__description-end"]}>
            <p>Join us on this journey of discovery, where each offer and benefit is a testament to our commitment to enhancing your experience. As our valued customer, you deserve nothing but the best, and we are dedicated to exceeding your expectations at every turn. Indulge. Experience. Enjoy.</p>
        </div>
      </div>
    </div>
  );
};
export default FaqQa;
