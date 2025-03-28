import Footer from "../../components/shared/footer/footer";
import LessonStep from "./LessonStep";
import ahorrosImg from "../../assets/ahorros.png";
import creditosImg from "../../assets/creditos.png";
import segurosImg from "../../assets/seguros.png";
import inversionesImg from "../../assets/inversiones.png";
import tesoroImg from "../../assets/tesoro.png";
import styles from "./Learn.module.scss";


const lessons = [
  {
    title: "Inversiones",
    description: "Es como sembrar una semilla hoy para que en el futuro crezca y te dé buenos frutos.",
    state: "locked",
    img: inversionesImg
  },
  {
    title: "Seguros",
    description: "Es como tener un paraguas listo por si llueve, te protege en momentos difíciles y te da tranquilidad.",
    state: "locked",
    img: segurosImg
  },
  {
    title: "Creditos",
    description: "Es pedir dinero prestado para algo importante, pero con el compromiso de devolverlo poco a poco.",
    state: "locked",
    img: creditosImg
  },
  {
    title: "Ahorros",
    description: "Es guardar un poquito hoy para tener tranquilidad y bienestar mañana.",
    state: "available",
    img: ahorrosImg
  }
]

export default function Learn() {

  return (
    <div>

<div className={styles.priceContainer}>
<img src={tesoroImg} alt="lessonImg" className={styles.priceImage}/>
</div>
   

      {lessons.map((lesson, i) => (
        <>
        <i class="bi bi-caret-up-fill" style={{ color: "#2F2558",fontSize: "1.5rem", justifySelf: "center", display: "flex"}}></i>
        
           <LessonStep title={lesson.title} description={lesson.description} state={lesson.state} img={lesson.img} index={i}/>
        </>
     
      ))}
      <Footer />
    </div>
  );
}
