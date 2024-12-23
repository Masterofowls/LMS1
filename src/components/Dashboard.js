import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardContentWrapper}>
        <h1 className={styles.dashboardTitle}>Dashboard</h1>
        <div className={styles.dashboardContent}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Analytics</h2>
            <p className={styles.cardContent}>View and analyze your data.</p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Settings</h2>
            <p className={styles.cardContent}>Manage your account settings.</p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Reports</h2>
            <p className={styles.cardContent}>
              Generate and download reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
