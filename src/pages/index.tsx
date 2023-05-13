import Button from "../components/Button/Button";
import styles from "./index.module.css";
import img from "../../public/myIncome.webp";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description_block}>
        <div className={styles.content}>
          <h1>Подача налоговой декларации теперь проще</h1>
          <h2>
            MyIncome.ge — универсальный помощник для малого бизнеса в Грузии
          </h2>
          <Button text="Get started" href="https://my-income.ge/sign-up" />
        </div>
        <img src={img.src} width="350" />
      </div>
      <div className={styles.features_block}>
        <div className={styles.feature}>
          <h2>Конвертация валют</h2>
          <p>Автоматическая конвертация в лари по курсу ЦБ Грузии</p>
        </div>
        <div className={styles.feature}>
          <h2>Подготовка декларации</h2>
          <p>Формирование отчета каждый месяц, для удобной подачи декларации</p>
        </div>
        <div className={styles.feature}>
          <h2>Конвертация валют</h2>
          <p>Автоматическая конвертация в лари по курсу ЦБ Грузии</p>
        </div>
      </div>
    </main>
  );
}
