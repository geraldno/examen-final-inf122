import Image from "next/image";
import styles from "./page.module.css";
import Marowak from "./components/marowak";

export default function Home() {
  return (
    <main className={styles.main}>
      <Marowak/>
    </main>
  );
}
