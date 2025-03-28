import { useUser } from "../../context/UserContext";
import Footer from "../../components/shared/footer/footer";
import LessonStep from "./LessonStep";
import tesoroImg from "../../assets/tesoro.png";
import styles from "./Learn.module.scss";


export default function Learn() {
  const { userState } = useUser();
  const { lessons } = userState

  return (
    <div>

      <div className={styles.priceContainer}>
        <img src={tesoroImg} alt="lessonImg" className={styles.priceImage} />
      </div>


      {lessons.map((lesson, i) => (
        <>
          <i class="bi bi-caret-up-fill" style={{ color: "#2F2558", fontSize: "1.5rem", justifySelf: "center", display: "flex" }}></i>

          <LessonStep title={lesson.title} description={lesson.description} state={lesson.state} img={lesson.img} index={i} />
        </>

      ))}
      <Footer />
    </div>
  );
}
