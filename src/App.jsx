import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Intro from "./components/Intro";
import Avatar from "./components/Avatar";
import Learn from "./components/Learn";
import Lesson from "./components/Lesson";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

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
