import React from "react";
import styles from "./Header.module.scss"
import Logo from "../logo/logo";
const Header = () => {
  return(
    <div className={styles['Header-main']}>
      <div className={styles['Header-logo']}>
      <img src="./images/company-logo.png" alt="logo" /> 
        {/* <Logo/> */}
      </div>
      <div className={styles["Header-links"]}>
      <p>Buy Gift Card</p>
      <p>Activate</p>
      <p>Offers & Benefits</p>
      <p>FAQ</p>
      </div>
      <div className={styles["Header-links"]}>
          <p>English</p>
          <button className={styles["login-btn"]}>Login</button>
          <button className={styles["register-btn"]} >Register</button>
      </div>

    </div>
  )
};

export default Header;
