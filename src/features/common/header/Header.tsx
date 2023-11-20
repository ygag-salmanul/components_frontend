import React from "react";
import styles from "./Header.module.scss"
import Logo from "../logo/logo";
import Link from "next/link";
const Header = () => {
  return(
    <div className={styles['header-main']}>
      <Link href={'/'} className={styles['header-logo']}>
      <img src="./images/company-logo.png" alt="logo" /> 
        {/* <Logo/> */}
      </Link>
      <div className={styles["header-links"]}>
      <p>Buy Gift Card</p>
      <p>Activate</p>
      <p>Offers & Benefits</p>
      <p>FAQ</p>
      </div>
      <div className={styles["btn-container"]}>
          <p>English</p>
          <button className={styles["login-btn"]}>Login</button>
          <button className={styles["register-btn"]} >Register</button>
      </div>

    </div>
  )
};

export default Header;
