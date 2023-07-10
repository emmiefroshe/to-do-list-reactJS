import MY_TODOS from "../../assets/MY_TODOS.PNG";
import styles from "./header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={MY_TODOS} />
      </header>
    </>
  );
}

export default Header