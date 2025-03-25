import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import User from "./components/user/User";
import Notes from "./components/notes/Notes";
import Resources from "./components/resources/Resources";
import InterviewQ from "./components/interview/InterviewQ";
import Quiz from "./components/quiz/Quiz";
function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="quiz" element={<Quiz />}></Route>
            <Route path="notes" element={<Notes />}></Route>
            <Route path="interview" element={<InterviewQ />}></Route>
            <Route path="resources" element={<Resources />}></Route>
            <Route path="user" element={<User />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
