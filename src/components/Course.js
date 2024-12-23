// src/components/Course.js
import styles from '../styles/Course.module.css';

const Course = ({ course }) => {
  return (
    <div className={styles.courseContainer}>
      <h2 className={styles.title}>{course.title}</h2>
      <p className={styles.description}>{course.description}</p>
    </div>
  );
};

export default Course;
