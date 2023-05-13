import styles from "./header.module.css";
import Button from "./Button/Button";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>MY INCOME</h1>
        <div className={styles.buttons}>
          <Button text="Signup" href="https://my-income.ge/sign-up" />
          <Button
            text="Login"
            href="https://my-income.ge/login"
            className="login"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
