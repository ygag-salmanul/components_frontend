"use client";
import Link from "next/link";
import styles from "./RegisterForm.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { EmailRegex, PhoneRegex } from "@/utils/helper";
import PhoneNumberInput from "../phoneNumberInput/MobileInput";
import { CountDownType } from "@/interfaces/common.interface";
import Countdown from "../common/otpCountdown/CountDown";
import { useAppContext } from "@/context/context";
import CustomizedSnackbars from "../common/toast/Toaster";
import { FLAGS_AND_COUNTRY_CODE } from "@/__mock-data__/index.data";

// interface User{
//   isOtpVerification:boolean,
//   email:string,
//   firstName:string,
//   lastName:string,
//   mobileNumber:number
// }

interface ErrorType {
  error: boolean;
  message: string;
}

const RegisterForm = ({ isOtpVerification = false }) => {
  const [openToast, setOpenToast] = useState<boolean>(false);
  const { userData, setUserData } = useAppContext();
  // console.log(userData);
  const router = useRouter();
  const [countryCode, setCountryCode] = useState({});

  const [countDownStatus, setCountDownStatus] =
    useState<CountDownType>("start");
  const [otp, setOtp] = useState<string>("");
  const [user, setUser] = useState({
    ...userData,
  });

  const [error, setError] = useState<{
    firstName: ErrorType;
    lastName: ErrorType;
    email: ErrorType;
    mobileNumber: ErrorType;
    otp: ErrorType;
  }>({
    firstName: {
      error: false,
      message: "",
    },
    lastName: {
      error: false,
      message: "",
    },
    email: {
      error: false,
      message: "",
    },
    mobileNumber: {
      error: false,
      message: "",
    },
    otp: {
      error: false,
      message: "",
    },
  });

  const handleResend = () => {
    setCountDownStatus("start");
  };

  const getFirstName = (value: string) => {
    setError((error) => ({
      ...error,
      firstName: {
        error: false,
        message: "",
      },
    }));
    setUser((user) => {
      return { ...user, firstName: value };
    });
  };
  const getLastName = (value: string) => {
    setError((error) => ({
      ...error,
      lastName: {
        error: false,
        message: "",
      },
    }));
    setUser((user) => {
      return { ...user, lastName: value };
    });
  };
  const getEmail = (value: string) => {
    setUser((user) => {
      return { ...user, email: value };
    });
  };
  const getMobileNumber = (value: string) => {
    // let currentValue = value;
    // currentValue = currentValue.replace(/[^\d\s\-()]/g, "");
    // if (currentValue && currentValue.length > 12) {
    //   currentValue = currentValue.slice(0, 12);
    // }
    setUser((user) => {
      return { ...user, mobileNumber: value };
    });
  };
  const getOtp = (value: string) => {
    setOtp(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isOtpVerification) {
      if (otp.trim() === "") {
        setError((error) => ({
          ...error,
          otp: {
            error: true,
            message: "invalid OTP",
          },
        }));
      } else {
        if (otp.length == 6) {
          router.push("/home");
        } else {
          setError((error) => ({
            ...error,
            otp: {
              error: true,
              message: "OTP must be 6 digits",
            },
          }));
        }
      }
    } else {
      const country=FLAGS_AND_COUNTRY_CODE.find((item)=>item.code===countryCode)
      console.log(country)
      console.log(PhoneRegex(user.mobileNumber,country?.name))
      if (user.firstName.trim() === "") {
        setError((error) => ({
          ...error,
          firstName: {
            error: true,
            message: "Please enter a valid name",
          },
        }));
      } else {
        console.log("name ");
        if (error.firstName.error) {
          setError((error) => ({
            ...error,
            firstName: {
              error: false,
              message: "",
            },
          }));
        }
      }
      if (user.lastName.trim() === "") {
        setError((error) => ({
          ...error,
          lastName: {
            error: true,
            message: "Please enter a valid name",
          },
        }));
      } else {
        console.log("elsecase");
        if (error.lastName.error) {
          setError((error) => ({
            ...error,
            lastName: {
              error: false,
              message: "",
            },
          }));
        }
      }
      if (!EmailRegex.test(user.email)) {
        setError((error) => ({
          ...error,
          email: {
            error: true,
            message: "Please enter a valid email",
          },
        }));
      } else {
        console.log("elsecase");
        if (error.email.error) {
          setError((error) => ({
            ...error,
            email: {
              error: false,
              message: "",
            },
          }));
        }
      }
      if (!PhoneRegex(user.mobileNumber,countryCode)) {
        console.log("ifcase");
        setError((error) => ({
          ...error,
          mobileNumber: {
            error: true,
            message: "Please enter a valid number",
          },
        }));
        console.log(error.mobileNumber);
      } else {
        if (error.mobileNumber) {
          setError((error) => ({
            ...error,
            mobileNumber: {
              error: false,
              message: "",
            },
          }));
        }
      }

      // if (error.firstName.error) {
      //   // console.log("verified");
      //   // console.log(error.mobileNumber);
      //   // router.push("/signup/verify");
      //   console.log(error.firstName.error);
      // } else {
      //   // console.log("not verified");
      //   // // router.push("/signup");
      //   console.log(error.firstName.error);
      //   // return;
      // }

      if (
        !error.firstName.error &&
        !error.lastName.error &&
        EmailRegex.test(user.email) &&
        PhoneRegex(user.mobileNumber)
      ) {
        setUserData({
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          mobileNumber: user.mobileNumber,
        });
        router.push("/signup/verify");
      }
    }
  };

  return (
    <div className={styles["main__form-contents"]}>
      <CustomizedSnackbars open={openToast} setOpen={setOpenToast} />
      <img
        src="/images/company-logo.png"
        height={70}
        width={151.7}
        alt="logo"
      />
      <div className="">
        <h2 className={styles.greeting}>Create an Account</h2>
        <p className={styles["dimmed-text"]}>
          Already have an account?&nbsp;
          <Link href={"/login"} className={styles["highlighted-text"]}>
            Login
          </Link>
        </p>
      </div>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <div className="">
          <div className={styles["name-field-wrapper"]}>
            <div className={styles["name-field"]}>
              <h6 className={styles["input-label"]}>First Name</h6>
              <div
                className={`${styles["input-box"]} ${
                  error.firstName.error ? styles["error-field"] : ""
                }`}
              >
                <input
                  disabled={isOtpVerification}
                  type="text"
                  value={user.firstName}
                  onChange={(e: any) => getFirstName(e.target.value)}
                />
              </div>
              {error.firstName.error && (
                <p className={styles["main__form-contents__error"]}>
                  {error.firstName.message}
                </p>
              )}
            </div>
            <div className={styles["name-field"]}>
              <h6 className={styles["input-label"]}>Last Name</h6>
              <div
                className={`${styles["input-box"]} ${
                  error.lastName.error ? styles["error-field"] : ""
                }`}
              >
                <input
                  disabled={isOtpVerification}
                  type="text"
                  value={user.lastName}
                  onChange={(e: any) => getLastName(e.target.value)}
                />
              </div>
              {error.lastName.error && (
                <p className={styles["main__form-contents__error"]}>
                  {error.lastName.message}
                </p>
              )}
            </div>
          </div>
          <h6 className={styles["input-label__margin"]}>Email ID</h6>
          <div
            className={`${styles["input-box"]} ${
              error.email.error ? styles["error-field"] : ""
            }`}
          >
            <input
              disabled={isOtpVerification}
              type="text"
              value={user.email}
              onChange={(e: any) => getEmail(e.target.value)}
            />
          </div>
          {error.email.error && (
            <p className={styles["main__form-contents__error"]}>
              {error.email.message}
            </p>
          )}
          <h6 className={styles["input-label__margin"]}>Mobile Number</h6>
          {/* <div className={styles["input-box"]}>
            <div className={styles["input-box__country-select"]}>+971</div>
            <input
              type="text"
              disabled={isOtpVerification}
              value={user.mobileNumber}
              onChange={(e: any) => getMobileNumber(e.target.value)}
            />
          </div> */}
          <PhoneNumberInput
            countryCode={countryCode}
            setCountryCode={setCountryCode}
            phoneNumber={user.mobileNumber}
            setPhoneNumber={getMobileNumber}
            disable={isOtpVerification}
          />
          {error.mobileNumber.error && (
            <p className={styles["main__form-contents__error"]}>
              {error.mobileNumber.message}
            </p>
          )}
          {isOtpVerification && (
            <>
              <h6 className={styles["input-label__margin"]}>
                Verification Code
              </h6>
              <div
                className={`${styles["input-box"]} ${
                  error.otp.error ? styles["error-field"] : ""
                }`}
              >
                <input
                  maxLength={6}
                  type="number"
                  className={styles["otp-input"]}
                  value={otp}
                  onChange={(e: any) => getOtp(e.target.value)}
                />
              </div>
              {error.otp.error && (
                <p className={styles["main__form-contents__error"]}>
                  {error.otp.message}
                </p>
              )}
              {countDownStatus == "finished" ? (
                <p className={styles["otp"]}>
                  Didnt get a code ?
                  <span
                    onClick={handleResend}
                    className={styles["highlighted-text "]}
                  >
                    &nbsp;Resend
                  </span>
                </p>
              ) : (
                <p className={styles["otp"]}>
                  <span>Resend Verification Code in &nbsp;</span>
                  <span className={styles["highlighted-text"]}>
                    <Countdown
                      status={countDownStatus}
                      setStatus={setCountDownStatus}
                    />
                  </span>
                </p>
              )}
            </>
          )}
        </div>
        <div className={styles["submit-btn"]}>
          {isOtpVerification ? (
            <button type="submit" className={styles["submit-btn"]}>
              Create Account
            </button>
          ) : (
            <button type="submit" className={styles["submit-btn"]}>
              Request Verification Code
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
