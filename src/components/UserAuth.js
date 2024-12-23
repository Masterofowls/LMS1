// src/components/UserAuth.js
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';
import styles from '../styles/UserAuth.module.css';

const UserAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authType, setAuthType] = useState('login');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (authType === 'login') {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) console.error('Error logging in:', error.message);
      else router.push('/dashboard');
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) console.error('Error registering:', error.message);
      else router.push('/dashboard');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>{authType === 'login' ? 'Login' : 'Register'}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        {authType === 'login' ? 'Login' : 'Register'}
      </button>
      <p
        onClick={() => setAuthType(authType === 'login' ? 'register' : 'login')}
        className={styles.switch}
      >
        {authType === 'login' ? 'Need an account? Register' : 'Have an account? Login'}
      </p>
    </form>
  );
};

export default UserAuth;
