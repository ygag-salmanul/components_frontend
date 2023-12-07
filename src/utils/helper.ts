import { getCountryCallingCode, validatePhoneNumberLength } from "libphonenumber-js"; 

export const PhoneRegex =(mobileNumber:string,country:any="IN")=>{
  console.log(country)
  console.log(mobileNumber.length,'length')
  // const countryCode=getCountryCallingCode(country)
  return validatePhoneNumberLength(mobileNumber,country)
  
}
// /^\d{10}$/;

export const EmailRegex =
  /^[a-zA-Z0-9]+([._+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/;