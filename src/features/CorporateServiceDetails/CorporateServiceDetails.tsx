import React from "react";
import styles from "./CorperateServiceDetails.module.scss";
import CorperateServiceContent from "./CorperateServiceContent";
import CorperateServicesOrbit from "./CorperateServicesOrbit";

const CorporateServiceDetails = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.content}>
          <CorperateServiceContent />
        </div>
        <div className={styles.orbit}>
          <CorperateServicesOrbit />
        </div>
      </div>
    </div>
  );
};

export default CorporateServiceDetails;
