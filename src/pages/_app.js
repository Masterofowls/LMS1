import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const pageVariants = {
  initial: { opacity: 0, x: '-50%' },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: '50%' },
};

const pageTransition = {
  duration: 0.3,
  ease: 'easeOut',
};

function MyApp({ Component, pageProps, router }) {
  const onPageChange = (page) => {
    console.log(`Navigating to ${page}`);
    // Custom logic here
  };

  return (
    <div className="layout">
      <Header onPageChange={onPageChange} /> {/* Pass onPageChange here */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          className="content"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default MyApp;
