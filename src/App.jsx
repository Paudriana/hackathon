import { Route, Routes } from "react-router-dom";
import "./App.css";
import Intro from "./pages/intro/Intro";
import CreateAvatar from "./pages/avatar/CreateAvatar";
import Learn from "./pages/learn.jsx/Learn";
import Lesson from "./pages/lesson/Lesson";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";
import Profile from "./pages/profile/Profile";
import Community from "./pages/community/Community";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Intro />} />
        <Route path="/avatar" element={<CreateAvatar />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </>
  );
}

export default App;
