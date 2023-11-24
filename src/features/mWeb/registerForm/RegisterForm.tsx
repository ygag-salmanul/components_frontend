
import styles from './RegisterForm.module.scss'
import Link from "next/link";

const RegisterForm = ({ isOtpVerification = false }) => {
  return (
    <div className={styles.container}>
      <img
        src="./images/company-logo.png"
        height={70}
        width={151.7}
        alt="logo"
      />
      <h2 className={styles.greeting}>Create an Account</h2>
      <p className={styles["dimmed-text"]}>
        Already have an account?&nbsp;
        <span className={styles["highlighted-text"]}>Login</span>
      </p>
      <h6 className={styles["input-label"]}>First Name</h6>
      <div className={styles["input-box"]}>
        <input type="text" defaultValue={"Ahmed"} />
      </div>
      <h6 className={styles["input-label"]}>Last Name</h6>
      <div className={styles["input-box"]}>
        <input type="text" defaultValue={"Nazouri"} />
      </div>
      <h6 className={styles["input-label"]}>Email ID</h6>
      <div className={styles["input-box"]}>
        <input type="text" defaultValue={"ahmed@email.com"} />
      </div>
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
        {isOtpVerification?<Link href={"/home"}><button className={styles["submit-btn"]}>Create Account</button></Link>:<button className={styles["submit-btn"]}>Request Verification Code</button>}
        
      </div>
    </div>
  );
};

export default RegisterForm;
