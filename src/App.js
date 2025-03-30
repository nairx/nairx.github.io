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
import Html from "./components/html/Html";
import Video from "./components/video/Video";
import Reactt from "./components/react/Reactt";
import Css from "./components/css/Css";
import Jsc from "./components/jsc/Jsc";
function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="resources" element={<Resources />}></Route>
            <Route path="user" element={<User />}></Route>
            <Route path="html" element={<Html />}>
              <Route index element={<Notes topic="html" />}></Route>
              <Route path="htmlnotes" element={<Notes topic="html" />}></Route>
              <Route path="htmlquiz" element={<Quiz topic="HTML" />}></Route>
              <Route
                path="htmlquest"
                element={<InterviewQ topic="HTML" />}
              ></Route>
              <Route
                path="htmlvideo"
                element={
                  <Video pathUrl="play-video" imgUrl="html" url="https://www.youtube.com/watch?v=qnLzHKKn4dQ&list=PL2rBj-iDS5rgEphq326It1qaF70Sby5hF" />
                }
              ></Route>
            </Route>
            <Route path="css" element={<Css />}>
              <Route index element={<Notes topic="css" />}></Route>
              <Route path="cssnotes" element={<Notes topic="css" />}></Route>
              <Route path="cssquiz" element={<Quiz topic="CSS" />}></Route>
              <Route
                path="cssquest"
                element={<InterviewQ topic="CSS" />}
              ></Route>
              <Route
                path="cssvideo"
                element={
                  <Video pathUrl="coming-soon" imgUrl="html" url="#" />
                }
              ></Route>
            </Route>


            <Route path="js" element={<Jsc />}>
              <Route index element={<Notes topic="js" />}></Route>
              <Route path="jsnotes" element={<Notes topic="js" />}></Route>
              <Route path="jsquiz" element={<Quiz topic="JavaScript" />}></Route>
              <Route
                path="jsquest"
                element={<InterviewQ topic="JavaScript" />}
              ></Route>
              <Route
                path="jsvideo"
                element={
                  <Video pathUrl="coming-soon" imgUrl="html" url="#" />
                }
              ></Route>
            </Route>

            <Route path="react" element={<Reactt />}>
              <Route index element={<Notes topic="react" />}></Route>
              <Route path="reactnotes" element={<Notes topic="react" />}></Route>
              <Route path="reactquiz" element={<Quiz topic="Reactjs" />}></Route>
              <Route
                path="reactquest"
                element={<InterviewQ topic="Reactjs" />}
              ></Route>
              <Route
                path="reactvideo"
                element={
                  <Video pathUrl="play-video" imgUrl="react" url="https://www.youtube.com/watch?v=NpKbdfcyNbo&list=PL2rBj-iDS5rjaPbm9n9XUSVXISeB2bHRP" />
                }
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
