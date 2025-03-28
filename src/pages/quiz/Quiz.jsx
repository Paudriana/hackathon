import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, ACTIONS } from "../../context/UserContext";
import styles from "./Quiz.module.scss";
import coinsIcon from "../../assets/icons/ic_coins.svg";
import successLesson from "../../assets/success-lesson.png";
import medalIcon from "../../assets/icons/ic_medal.svg";

const questions = [
  { id: 1, question: "¿Cuál es un buen truco para empezar a ahorrar?", options: ["A. Ahorrar lo que me sobra a fin de mes.", "B. Separar el ahorro primero, antes de gastar.", "C. No gastar en nada y guardarlo todo."], correct: 1, answerExplanation: "Si ahorras después, nunca sobra; si ahorras primero, siempre guardas.", coins: 5 },
  { id: 2, question: "¿Cómo funciona la regla del 50-30-20?", options: ["A. 50% gustos, 30% necesidades, 20% deudas.", "B. 50% necesidades, 30% gustos, 20% ahorros y deudas.", "C. 50% ahorros, 30% gustos, 20% necesidades."], correct: 1, answerExplanation: "Recuerda: 50% necesidades, 30% gustos, 20% ahorros y deudas.", coins: 5 },
  { id: 3, question: "¿Cuál de estos gastos es una necesidad?", options: ["A. Netflix", "B. Ropa de moda", "C. Luz y agua"], correct: 2, answerExplanation: "Agua y luz son servicios básicos esenciales para vivir, los otros gastos pueden ser opcionales.", coins: 5 },
  { id: 4, question: "¿Qué ayuda a que el ahorro sea más fácil?", options: ["A. Tener una meta clara", "B. Guardar el dinero en cualquier parte", "C. Esperar a ver cuánto me sobra"], correct: 0, answerExplanation: "Tener una meta clara te da un propósito definido para tu ahorro", coins: 5 },
  { id: 5, question: "Si quiero ahorrar S/500 en 5 meses, ¿cuánto debo guardar cada mes?", options: ["A. S/100", "B. S/50", "C. S/200"], correct: 0, answerExplanation: "Se divide el monto total (S/500) entre el número de meses (5), lo que resulta en un ahorro mensual de S/100.", coins: 5 }
];

export default function Quiz() {
  const navigate = useNavigate();
  const { userState, dispatch } = useUser();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isRight, setIsRight] = useState(false);

  const handleSelected = (selectedOption) => {
    if (selectedOption === null) return;

    setSelectedOption(selectedOption);

    const isRight = selectedOption === questions[currentQuestion].correct;
    setFeedback(isRight ? "¡Muy bien!" : "¡Upps!");
    setIsRight(isRight)

    if (selectedOption === questions[currentQuestion].correct) setScore(score + 1);



  };

  const handleNext = () => {
    setFeedback("");
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  }

  const ProgressIndicator = () => {

    return (
      <div className={styles.progressCount}>
        {questions.map((_, index) => (
          <i key={index} className={`bi bi-${index + 1}-circle${currentQuestion > index ? "-fill" : ""}`} style={{ color: currentQuestion > index ? "#E95877" : "#2F2558", margin: "1rem", fontSize: "3rem" }} />
        ))}
      </div>
    )

  };

  const updateLessons = () => {
    const nextLesson = userState.lessons.find((lesson) => lesson.id == userState.selectedLesson.id + 1)
    const newLessons = userState.lessons.filter((lesson) => lesson.id !== userState.selectedLesson.id && lesson.id !== nextLesson.id)

    newLessons.push({
      ...nextLesson,
      state: "available"
    })

    newLessons.push({
      ...userState.selectedLesson,
      state: "completed"
    })

    
    return newLessons


  }

  const handleLearnAgain = () => {
    dispatch({ type: ACTIONS.SET_COINS, payload: 25 });
    dispatch({ type: ACTIONS.SET_EXP, payload: 100 });
    dispatch({ type: ACTIONS.SET_LEVEL, payload: 2 });

    dispatch({ type: ACTIONS.SET_LESSONS, payload: updateLessons() });

    navigate("/learn")
  }

  return (
    <div className="quiz-container">

      {!showResult ? (
        <div>

          <ProgressIndicator />
          <div className={styles.questionTitleContainer}>
            <div className={styles.coins}>
              <img src={coinsIcon} alt="Coins" className={styles.coinsIcon} />
              <p className={styles.intis}>{questions[currentQuestion].coins}</p>
            </div>

            <h2>{questions[currentQuestion].question}</h2>
          </div>


          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className={`${styles.questionOption} ${selectedOption == index && styles.selectedOption}`} onClick={() => handleSelected(index)} >
              <p>{option}</p>
            </div>
          ))}

          {feedback &&
            (
              <div className={styles.resultContainer}>
                <div className={`${styles.resultHeader} ${isRight ? styles.right : styles.wrong}`}>
                  {isRight ? (<i class="bi bi-check2" style={{ fontSize: "2rem", fontWeight: "800", marginLeft: "0.5rem" }}></i>) : (<i class="bi bi-x" style={{ fontSize: "2rem", fontWeight: "800", marginLeft: "0.25rem" }}></i>)}
                  <p className="feedback">{feedback}</p>
                </div>
                <p className={styles.answerExplanation}>{questions[currentQuestion].answerExplanation}</p>
              </div>
            )
          }
          <button onClick={handleNext} className={styles.continueButton}>Continuar</button>
        </div>
      ) : (
        <div>
          <h2 className={styles.lessonFinishedTitle}>{"¡Lección Completada!"}</h2>
          <img src={successLesson} alt="Coins" className={styles.resultImg} />
          <div className={styles.resultCount}>
            <p>Experiencia Obtenida</p>
            <div className={styles.count}>
              <img src={medalIcon} alt="Medal" />
              <p>100</p>
            </div>

          </div>
          <div className={styles.resultCount} style={{ borderColor: "#E95877" }}>
            <p>Intis ganados</p>
            <div className={styles.count}>
              <img src={coinsIcon} alt="Coins" className={styles.coinsIcon} />
              <p style={{ marginLeft: "0.5rem", color: "#E95877" }}>25</p>
            </div>


          </div>
          <button onClick={handleLearnAgain} className={styles.finishLessonButton} >Seguir aprendiendo</button>
        </div>
      )}
    </div>
  );
}