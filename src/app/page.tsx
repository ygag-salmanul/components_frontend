import Image from "next/image";
import styles from "./page.module.scss";
import Sample from "@/features/sample/Sample";

export default function Home() {
  return (
    <main className={styles.main}>
      <Sample />
    </main>
  );
}
