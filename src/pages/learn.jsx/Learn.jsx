import Footer from "../../components/shared/footer/footer";
import LessonStep from "./LessonStep";


const lessons = [
  {
    title: "Ahorros",
    description: "Es guardar un poquito hoy para tener tranquilidad y bienestar mañana.",
    state: "available",
  },
  {
    title: "Creditos",
    description: "Es pedir dinero prestado para algo importante, pero con el compromiso de devolverlo poco a poco.",
    state: "locked",
  },
  {
    title: "Seguros",
    description: "Es como tener un paraguas listo por si llueve, te protege en momentos difíciles y te da tranquilidad.",
    state:
      "locked",
  },
  {
    title: "Inversiones",
    description: "Es como sembrar una semilla hoy para que en el futuro crezca y te dé buenos frutos.",
    state:
      "locked",
  }
]

export default function Learn() {

  return (
    <div>
      {lessons.map((lesson, i) => (
        <LessonStep title={lesson.title} description={lesson.description} state={lesson.state} index={i}/>
      ))}
      <Footer />
    </div>
  );
}
