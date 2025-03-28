
import styles from "./Learn.module.scss";
import { useNavigate } from "react-router-dom";

const LessonStep = ({ title, description, state, img, index }) => {
    const navigate = useNavigate();
    const isEven = index == 0 || index % 2 == 0;
    return (
        <div className={`${styles.lessonStep} ${!isEven ? styles.evenLessonStep : ""}`}>
            <div className={styles.textContainer}>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>

            <div 
            onClick={() => navigate("/lesson")}
            className={`${styles.lessonImgContainer} ${state == "available" ? styles.availableLesson : state == "completed" ? styles.completedLesson : styles.blockedLesson}`}>
                <i class="bi bi-check-circle-fill" style={{display: state == "completed" ? "block" : "none", position: "absolute", top: 0, left:62, color: "#E95877" }}></i>
                <img src={img} alt="lessonImg" className={styles.lessonImg} />
            </div>

        </div>
    )
}

export default LessonStep;