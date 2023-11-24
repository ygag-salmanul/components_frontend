import Image from "next/image";
import styles from "./page.module.scss";
import Sample from "@/features/sample/Sample";
import CorporateServiceDetails from "@/features/CorporateServiceDetails/CorporateServiceDetails";
import Header from "@/features/mWeb/header/Header";
import Banner from "@/features/mWeb/banner/Banner";
import Footer from "@/features/mWeb/footer/Footer";
import Accordions from "@/features/mWeb/accordion/Accordion";
import LoginForm from "@/features/loginForm/LoginForm";
import CorporateService from "@/features/mWeb/corporateService/CorporateService";
import RegisterForm from "@/features/mWeb/registerForm/RegisterForm";

export default function Home() {
  return (
    <main className={styles.main}>
    <RegisterForm/>
    </main>
  );
}
