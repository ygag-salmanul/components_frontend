import React from "react";
import styles from "./CorperateServicesOrbit.module.scss";
import { CORPERATE_SERVICES_DATA } from "../../__mock-data__/index.data";

const CorperateServicesOrbit = () => {
  return (
    <div className={styles["corperate-services-orbit"]}>
      <ul className={styles["corperate-services-orbit__container"]}>
        <li className={styles["corperate-services-orbit__ring-0"]}></li>
        <li className={styles["corperate-services-orbit__ring-1"]}></li>
        <li className={styles["corperate-services-orbit__ring-2"]}></li>
        <li className={styles["corperate-services-orbit__content-ring"]}>
          <ul
            className={
              styles["corperate-services-orbit__content-ring__revolving"]
            }
          >
            {CORPERATE_SERVICES_DATA.map((data) => (
              <li
                className={
                  styles[
                    "corperate-services-orbit__content-ring__revolving__item"
                  ]
                }
                key={data.id}
              >
                <h6
                  className={
                    styles[
                      "corperate-services-orbit__content-ring__revolving__item__name"
                    ]
                  }
                >
                  {data.name}
                </h6>
                <div
                  className={
                    styles[
                      "corperate-services-orbit__content-ring__revolving__item__image"
                    ]
                  }
                >
                  <img height={24} src={data.image} alt={data.name} />
                </div>
              </li>
            ))}
          </ul>
        </li>
        <li className={styles["corperate-services-orbit__center"]}>
          <img src="assets/brand-image.png" width={100} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default CorperateServicesOrbit;
