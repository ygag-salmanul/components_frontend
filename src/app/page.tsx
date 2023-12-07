import Image from "next/image";
import styles from "./page.module.scss";
import Sample from "@/features/sample/Sample";
import CorporateServiceDetails from "@/features/CorporateServiceDetails/CorporateServiceDetails";
import Header from "@/features/common/header/Header";
import Banner from "@/features/banner/Banner";
import Footer from "@/features/common/footer/Footer";
import Accordions from "@/features/accordion/Accordion";
import LoginForm from "@/features/loginForm/LoginForm";
import CorporateService from "@/features/CorporateServiceDetails/CorporateServiceDetails";
import RegisterForm from "@/features/registerForm/RegisterForm";
import Link from "next/link";
import FaqAccordion from "@/features/faq/FaqAccordion";

export default function Home() {
  return <main className={styles.main}>
    <FaqAccordion/>
  </main>;
}
