
import styles from "./Learn.module.scss";

const LessonStep = ({title, description, state, index}) => {
    const isEven = index == 0 || index % 2 == 0;
    return (
<div className={`${styles.lessonStep} ${isEven ? styles.evenLessonStep : "x"}`}>
    <div className={styles.textContainer}>
    <h5>{title}</h5>
    <p>{description}</p>
    </div>
  
  <div className={styles.lessonImgContainer}>
  <div className={styles.lessonImg} />
  </div>
    
</div>
    )
}

export default LessonStep;