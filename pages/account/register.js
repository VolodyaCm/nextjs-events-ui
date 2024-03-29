import { FaUser } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/AuthForm.module.css';
import AuthContext from '@/context/AuthContext';

export default function LoginPage() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { error, register } = useContext(AuthContext);

  useEffect(() => error && toast.error(error))

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error('Passwords do not match!!!');
    }
    register({ username, email, password });
  };

  return (
    <div>
      <Layout title='User Registration'>
        <div className={styles.auth}>
          <h1>
            <FaUser /> Log In
          </h1>
          <ToastContainer />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='text'>Username</label>
              <input
                type='text'
                id='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='confirm-password'>Confirm Password</label>
              <input
                type='password'AuthContext
                id='confirm-password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <input type='submit' value='Register' className='btn' />
          </form>
          <p>
            Don't have an account? <Link href='/account/register'>Register</Link>
          </p>
        </div>
      </Layout>
    </div>
  )
}
