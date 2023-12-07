
'use client'
import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import Link from "next/link";
import { useAppContext } from "@/context/context";
import PhoneNumberInput from "../phoneNumberInput/MobileInput";
import { FLAGS_AND_COUNTRY_CODE } from "@/__mock-data__/index.data";
import { CountDownType } from "@/interfaces/common.interface";
import Countdown from "../common/otpCountdown/CountDown";
import { PhoneRegex } from "@/utils/helper";
import { useRouter } from "next/navigation";

const LoginForm = ({ isOtpVerification = false }) => {
  const router=useRouter()
  const [countryCode,setCountryCode]=useState(FLAGS_AND_COUNTRY_CODE[0])
  const [countDownStatus,setCountDownStatus]=useState<CountDownType>('start')
  const {userData,setUserData} =useAppContext()
  const [user,setUser]=useState({...userData})
  const [otp,setOtp]=useState('')
  const [error,setError]=useState({
    mobileNumber:{
      error:false,
      message:''
    },
    otp:{
      error:false,
      message:''
    }
  })
  const getMobileNumber=(value:string)=>{
    setUser((user)=>{
      return{...user,mobileNumber:value}
      
    })
  }

  const getOtp=(value:string)=>{
    setOtp(value)

  }

  const handleResend = () => {
    setCountDownStatus("start");
  };

  const handleSubmit=(e:any)=>{
    console.log('hii')
    e.preventDefault()
    if(isOtpVerification){
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

    }else{
      if(PhoneRegex.test(user.mobileNumber)){
        setUserData((data)=>{
          return{...data,mobileNumber:user.mobileNumber}
        })
        router.push('/login/verify')
      }else{
        setError((error) => ({
          ...error,
          mobileNumber: {
            error: true,
            message: "Please enter a valid number",
          },
        }));
      }
    }

  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <img
        src="/images/company-logo.png"
        height={70}
        width={151.7}
        alt="logo"
      />
      <h2 className={styles.greeting}>Welcome Back</h2>
      <p className={styles["dimmed-text"]}>
        Don’t have an account?&nbsp;
        <Link href={'/signup'} className={styles["highlighted-text"]}>Get Started</Link>
      </p>
      <h6 className={styles["input-label"]}>Mobile Number</h6>
      {/* <div className={styles["input-box"]}>
        <div className={styles["input-box__country-select"]}>+971</div>
        <input type="text" value={user.mobileNumber} onChange={getMobileNumber} />
      </div> */}
               <PhoneNumberInput
            countryCode={countryCode}
            setCountryCode={setCountryCode}
            phoneNumber={user.mobileNumber}
            setPhoneNumber={getMobileNumber}
            disable={isOtpVerification}
          />
          {error.mobileNumber.error && (
            <p className={styles["main__form-contents__error"]}>{error.mobileNumber.message}</p>
          )}
          {isOtpVerification && (
            <>
              <h6 className={styles["input-label__margin"]}>
                Verification Code
              </h6>
              <div className={styles["input-box"]}>
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
      <div className={styles["submit-btn__container"]}>
        <button type="submit" className={styles["submit-btn"]}>
          {isOtpVerification ? "Login" : "Request Verification Code"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
