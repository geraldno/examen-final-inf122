import styles from "./page.module.css";
import Marowak from "./components/pokemon/marowak";

export default function Home() {
  return (
    <main className={styles.main}>
      <Marowak/>
    </main>
  );
}
