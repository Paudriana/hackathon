import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Lesson.module.scss";
import lesson1Image from "../../assets/lesson1.png";
import lesson2Image from "../../assets/lesson2.jpeg";
import lesson3Image from "../../assets/lesson3.jpeg";
import lesson4Image from "../../assets/lesson4.jpeg";

const lessonSteps = [
  {
    title: "Pequeños cambios, gran diferencia",
    text: `Guardar plata no significa dejar de disfrutar. Se trata de hacer pequeños cambios que suman.<br /><br />
    <strong>Ejemplo</strong>: Si compras un café de S/10 todos los días, al mes son S/300. ¿Y si lo haces en casa un par de días? Podrías ahorrar hasta S/150 al mes. <br /><br />
    ¡Eso es casi un recibo de luz o internet pagado!`,
    image: lesson1Image,
  },
  {
    title: "El truco del 50-30-20",
    text: `Hay una forma fácil de organizar tu dinero sin tanto rollo:<br /><br />
🏠 50% para necesidades (comida, alquiler, luz, agua).<br />
🎉 30% para gustos (salidas, ropa, Netflix).<br />
💰 20% para ahorros y deudas.<br /><br />
Si sigues esto, siempre tendrás algo guardado para emergencias y para cumplir tus metas.`,
    image: lesson2Image,
  },
  {
    title: "Un ahorro que se hace solo",
    text: `Si esperas a ver cuánto te sobra para ahorrar, nunca pasa. Lo mejor es ahorrar primero.<br /><br />
📌 Tip: Apenas recibas tu sueldo o ingreso, separa un monto y guárdalo en una cuenta aparte. Así, te olvidas que existe y no lo gastas sin querer.`,
    image: lesson3Image,
  },
  {
    title: "Tu ahorro con propósito",
    text: `Ahorrar sin una razón es difícil. Ponte una meta clara:<br /><br />
✔️ "Quiero ahorrar S/500 en 3 meses para un viaje."<br /><br />
✔️ "Voy a juntar S/1000 este año para emergencias."<br /><br />
Si tienes un objetivo, te motivará más.`,
    image: lesson4Image,
  },
];

export default function Lesson() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < lessonSteps.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/quiz");
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      navigate("/learn");
    }
  };

  return (
    <>
      <i className="bi bi-arrow-left" style={{ fontSize: "2rem" }} onClick={previousStep}></i>

      <div className={styles.lessonContainer}>
        <h2 className={styles.lessonTitle}>Ahorros</h2>
        <img src={lessonSteps[step].image} alt="Lesson step" className={styles.lessonImg} />
        <h3 className={styles.lessonSubtitle}>{lessonSteps[step].title}</h3>
        <div dangerouslySetInnerHTML={{ __html: lessonSteps[step].text }} className={styles.contentText} />
       
      </div>

      <button onClick={nextStep} className={styles.continueButton}>
          {step < lessonSteps.length - 1 ? "¿Que más?" : "Vamos a la práctica"}
        </button>
    </>

  );
}
