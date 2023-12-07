import React from "react";
import styles from "./Header.module.scss";
import Logo from "../logo/logo";
import Link from "next/link";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles["header-main"]} wrapper`}>
        <Link href={"/"} className={styles["header-logo"]}>
          <img src="./images/company-logo.png" alt="logo" />
          {/* <Logo/> */}
        </Link>
        <div className={styles["header-links"]}>
          <Link href={"/"}>Buy Gift Card</Link>
          <Link href={"/"}>Activate</Link>
          <Link href={"/"}>Offers & Benefits</Link>
          <Link href={"/"}>FAQ</Link>
        </div>
        <div className={styles["btn-container"]}>
          <Link href={"/"}>العربية</Link>
          <Link href={'/login'} >
          <button className={styles["login-btn"]}>Login</button>
          </Link>
          <Link href={'/signup'} >
          <button className={styles["register-btn"]}>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
