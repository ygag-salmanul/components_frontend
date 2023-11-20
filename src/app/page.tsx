import Image from "next/image";
import styles from "./page.module.scss";
import Sample from "@/features/sample/Sample";
import Header from "@/features/common/header/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      {/* <Sample /> */}
    </main>
  );
}
