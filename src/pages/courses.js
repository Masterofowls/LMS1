import { useState } from 'react';
import Course from '../components/Course';
import styles from '../styles/Courses.module.css';

const coursesData = [
  { title: 'JavaScript Course', description: 'Master JavaScript with modern frameworks and libraries.' },
  { title: 'CSS Course', description: 'Learn advanced CSS techniques and responsive design.' },
  { title: 'Math Course', description: 'Explore mathematical concepts for programming.' },
  { title: 'HTML Course', description: 'Build robust and accessible websites with HTML.' },
  { title: 'TypeScript Course', description: 'Level up with TypeScript for scalable applications.' },
];

const Courses = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? coursesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === coursesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.coursesPage}>
      <h1 className={styles.pageTitle}>Our Courses</h1>
      <div className={styles.slider}>
        <button onClick={handlePrev} className={styles.navButton}>
          ◀
        </button>
        <div className={styles.sliderContent}>
          <Course course={coursesData[currentSlide]} />
        </div>
        <button onClick={handleNext} className={styles.navButton}>
          ▶
        </button>
      </div>
      <div className={styles.cardsContainer}>
        {coursesData.map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
