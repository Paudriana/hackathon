import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Intro from "./pages/intro/Intro";
import Avatar from "./pages/avatar/Avatar";
import Learn from "./pages/learn.jsx/Learn";
import Lesson from "./pages/lesson/Lesson";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          <Link to="/avatar">Avatar</Link>{" "}
        </li>
        <li>
          <Link to="/learn">Learn</Link>{" "}
        </li>
        <li>
          <Link to="/lesson">Lesson</Link>{" "}
        </li>
        <li>
          <Link to="/quiz">Quiz</Link>{" "}
        </li>
        <li>
          <Link to="/result">Result</Link>{" "}
        </li>
      </ul>
      <Routes>
        <Route path="/" exact element={<Intro />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
