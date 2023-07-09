
import styles from "./login.module.css"


function Login() {
    return(
        <>
        <div className={styles.login_container}>
        <form>
        <h1>Please login</h1>
        <div className={styles.login_content}>
            <div className={styles.login_input}>
            <input type="email" placeholder='enter your email'/>
            </div>
            <div className={styles.login_input}>
            <input type="password" placeholder='enter your password'/>
            </div>
            <a href="#">FORGOT YOUR PASSWORD?</a>
        </div>
        <div className={styles.login_action}>
        <button>Sign Up</button>
        <button>Log In</button>
        </div>
        </form>
        </div>
        </>
  )
};

export default Login


