import React from "react";
import styles from "./LoginForm.module.scss";
import Link from "next/link";

const LoginForm = ({ isOtpVerification = false }) => {
  return (
    <div className={styles.container}>
      <img
        src="./images/company-logo.png"
        height={70}
        width={151.7}
        alt="logo"
      />
      <h2 className={styles.greeting}>Welcome Back</h2>
      <p className={styles["dimmed-text"]}>
        Don’t have an account?&nbsp;
        <span className={styles["highlighted-text"]}>Get Started</span>
      </p>
      <h6 className={styles["input-label"]}>Mobile Number</h6>
      <div className={styles["input-box"]}>
        <div className={styles["input-box__country-select"]}>+971</div>
        <input type="text" defaultValue={"55 555 55555"} />
      </div>
      {isOtpVerification && (
        <>
          <h6 className={styles["input-label"]}>Verification Code</h6>
          <div className={styles["input-box"]}>
            <input
              type="text"
              className={styles["otp-input"]}
              defaultValue={"123456"}
            />
          </div>
          <p
            className={`${styles["dimmed-text"]} ${styles["no-margin-bottom"]}`}
          >
            Resend Verification Code in&nbsp;
            <span className={styles["highlighted-text"]}>00:24</span>
          </p>
        </>
      )}
      <div className={styles["submit-btn__container"]}>
        <button className={styles["submit-btn"]}>
          {isOtpVerification ? "Login" : "Request Verification Code"}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
