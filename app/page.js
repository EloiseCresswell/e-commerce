"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HeaderImage from "./header_photo/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <HeaderImage />
      </div>
    </main>
  );
}
