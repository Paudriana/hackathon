import { Route, Routes } from "react-router-dom";
import { UserProvider } from "../src/context/UserContext";
import "./App.css";
import Intro from "./pages/intro/Intro";
import CreateAvatar from "./pages/avatar/CreateAvatar";
import Learn from "./pages/learn/Learn";
import Lesson from "./pages/lesson/Lesson";
import Quiz from "./pages/quiz/Quiz";
import Profile from "./pages/profile/Profile";
import Community from "./pages/community/Community";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" exact element={<Intro />} />
        <Route path="/avatar" element={<CreateAvatar />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
