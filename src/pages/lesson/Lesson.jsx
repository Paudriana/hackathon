import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Lesson.module.scss";

const lessonSteps = [
  {
    title: "Pequeños cambios, gran diferencia",
    text: "Guardar plata no significa dejar de disfrutar. Se trata de hacer pequeños cambios que suman. Ejemplo: Si compras un café de S/10 todos los días, al mes son S/300. ¿Y si lo haces en casa un par de días? Podrías ahorrar hasta S/150 al mes. ¡Eso es casi un recibo de luz o internet pagado!",
    image: "/images/save-money-1.png",
  },
  {
    title: "El truco del 50-30-20",
    text: `Hay una forma fácil de organizar tu dinero sin tanto rollo:

🏠 50% para necesidades (comida, alquiler, luz, agua).

🎉 30% para gustos (salidas, ropa, Netflix).

💰 20% para ahorros y deudas.

Si sigues esto, siempre tendrás algo guardado para emergencias y para cumplir tus metas.`,
    image: "/images/save-money-2.png",
  },
  {
   title: "Un ahorro que se hace solo",
    text: `Si esperas a ver cuánto te sobra para ahorrar, nunca pasa. Lo mejor es ahorrar primero.
📌 Tip: Apenas recibas tu sueldo o ingreso, separa un monto y guárdalo en una cuenta aparte. Así, te olvidas que existe y no lo gastas sin querer.`,
    image: "/images/save-money-3.png",
  },
  {
    title: "Tu ahorro con propósito",
    text: `Ahorrar sin una razón es difícil. Ponte una meta clara:

✔️ "Quiero ahorrar S/500 en 3 meses para un viaje."
✔️ "Voy a juntar S/1000 este año para emergencias."

Si tienes un objetivo, te motivará más.`,
    image: "/images/save-money-4.png",
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

  return (
    <div className={styles.lessonContainer}>
      <h2>{lessonSteps[step].title}</h2>
      <img src={lessonSteps[step].image} alt="Lesson step" />
      <p>{lessonSteps[step].text}</p>
      <button onClick={nextStep}>
        {step < lessonSteps.length - 1 ? "Siguiente" : "Vamos a la práctica"}
      </button>
    </div>
  );
}
