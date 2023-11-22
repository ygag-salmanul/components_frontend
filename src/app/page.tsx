import Image from "next/image";
import styles from "./page.module.scss";
import Sample from "@/features/sample/Sample";
import CorporateServiceDetails from "@/features/CorporateServiceDetails/CorporateServiceDetails";
import Header from "@/features/common/header/Header";
import Banner from "@/features/banner/Banner";
import Footer from "@/features/common/footer/Footer";
import Accordions from "@/features/accordion/Accordion";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Banner />
      <CorporateServiceDetails />
      <Accordions/>
      <Footer />
    </main>
  );
}
