import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "¿Cuál es un buen truco para empezar a ahorrar?",
    options: [
      "Ahorrar lo que me sobra a fin de mes.",
      "Separar el ahorro primero, antes de gastar.",
      "No gastar en nada y guardarlo todo.",
    ],
    correct: 1,
  },
  {
    question: "¿Cómo funciona la regla del 50-30-20?",
    options: [
      "50% gustos, 30% necesidades, 20% deudas.",
      "50% necesidades, 30% gustos, 20% ahorros y deudas.",
      "50% ahorros, 30% gustos, 20% necesidades.",
    ],
    correct: 1,
  },
  {
    question: "¿Cuál de estos gastos es una necesidad?",
    options: ["Netflix", "Ropa de moda", "Luz y agua"],
    correct: 2,
  },
  {
    question: "¿Qué ayuda a que el ahorro sea más fácil?",
    options: [
      "Tener una meta clara",
      "Guardar el dinero en cualquier parte",
      "Esperar a ver cuánto me sobra",
    ],
    correct: 0,
  },
  {
    question:
      "Si quiero ahorrar S/500 en 5 meses, ¿cuánto debo guardar cada mes?",
    options: ["S/100", "S/50", "S/200"],
    correct: 0,
  },
];

export default function Quiz() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleNext = () => {

    if (selectedOption === null) return;

    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
      setFeedback("✅ ¡Correcto!");
    } else {
      setFeedback("❌ Incorrecto. Sigue practicando.");
    }

    setTimeout(() => {
      setFeedback("");
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <div>
             
              <input 
              type="radio" 
              id="html" 
              name="fav_language" 
              value={option} 
              key={index}
              onClick={() => setSelectedOption(index)}
              className={selectedOption === index ? "selected" : ""} />
               <label for={option}>{option}</label>
              </div>
           
            
            ))}
          </ul>
          {feedback && <p className="feedback">{feedback}</p>}
          <button onClick={handleNext} disabled={selectedOption === null}>
            Continuar
          </button>
        </div>
      ) : (
        <div>
          <h2>{score >= 4 ? "🎉 ¡Felicitaciones!" : "¡Sigue practicando!"}</h2>
          <p>
            {score >= 4
              ? "Estás en camino a ser una experta en ahorro."
              : "Puedes volver a leer la lección y repetir el quiz."}
          </p>
          <button onClick={() =>  navigate("/learn")}>
            Seguir aprendiendo
          </button>
        </div>
      )}
    </div>
  );
}
