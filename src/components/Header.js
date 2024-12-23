import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = ({ onPageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (page) => {
    onPageChange(page); // Trigger carousel effect
    router.push(page);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.shrink : ''}`}>
      <nav className={styles.nav} role="navigation">
        {['/dashboard', '/courses', '/chat', '/login'].map((page) => (
          <motion.div
            key={page}
            whileHover={{ scale: 1.1, color: '#32a852' }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={page}
              className={`${styles.link} ${
                currentPath === page ? styles.activeLink : ''
              }`}
              onClick={() => handleLinkClick(page)}
            >
              {page.replace('/', '').toUpperCase() || 'HOME'}
            </Link>
          </motion.div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
