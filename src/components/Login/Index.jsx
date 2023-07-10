import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./login.module.css"


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', email, password);
  };

    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className={styles.content}>
                        <div className={styles.input}>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='EMAIL' />
                            <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='PASSWORD' />
                        </div>
                        <a href="#">FORGOT YOUR PASSWORD?</a>
                    </div>
                    <div className={styles.action}>
                        <button>SIGN UP</button>
                        <button type='submit'><Link to={"/todo"}>LOG IN</Link></button>
                        {/* <Link to={"/component/Header"}>login</Link> */}
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login


