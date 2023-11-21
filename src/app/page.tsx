import Image from "next/image";
import styles from "./page.module.scss";
import Sample from "@/features/sample/Sample";
import CorporateServiceDetails from "@/features/CorporateServiceDetails/CorporateServiceDetails";
import Header from "@/features/common/header/Header";
<<<<<<< HEAD
import Footer from "@/features/common/footer/Footer";
import Banner from "@/features/banner/Banner";
=======
import Banner from "@/features/banner/Banner";
import Footer from "@/features/common/footer/Footer";
>>>>>>> d931d90fdf64718f06ef4abd175e78c440bb6639

export default function Home() {
  return (
    <main className={styles.main}>
<<<<<<< HEAD
      <Header/>
      {/* <Sample /> */}
      <Banner/>
      <Footer/>
=======
      <Header />
      <Banner />
      <CorporateServiceDetails />
      <Footer />
>>>>>>> d931d90fdf64718f06ef4abd175e78c440bb6639
    </main>
  );
}
