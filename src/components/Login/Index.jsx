
import styles from "./login.module.css"


function Login() {
    return(
        <div className={styles.login}>
            <div className={styles.login_container}>
        <form>
        <h1>Login</h1>
        <div className={styles.login_content}>
            <div className={styles.login_input}>
            <input type="email" placeholder='EMAIL'/>
            </div>
            <div className={styles.login_input}>
            <input type="password" placeholder='PASSWORD'/>
            </div>
            <a href="#">FORGOT YOUR PASSWORD?</a>
        </div>
        <div className={styles.login_action}>
        <button>SIGN UP</button>
        <button>LOG IN</button>
        </div>
        </form>
        </div>
        </div>
  )
};

export default Login


