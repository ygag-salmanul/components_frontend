import Image from "next/image";
import styles from "./page.module.scss";
import Sample from "@/features/sample/Sample";
import CorporateServiceDetails from "@/features/CorporateServiceDetails/CorporateServiceDetails";

export default function Home() {
  return (
    <main className={styles.main}>
      <CorporateServiceDetails />
    </main>
  );
}
