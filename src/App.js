import "./App.css";
import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <div className="leftBox">
        <h1>Praveen Nair</h1>
        <p>MERN Stack Trainer & Developer</p>
        <div className="App-icons">
          <a href="https://github.com/nairsite">
            <FaGithubSquare />
          </a><a href="https://in.linkedin.com/in/nairprv">
            <FaLinkedin />
          </a><a href="https://www.youtube.com/@praveen-nair">
            <FaYoutubeSquare />
          </a>
        </div>
      </div>
      <div className="rightBox">
        <h1>Projects</h1>
        <li>
          <a href="https://nairsite.github.io/ecomm-react">E-commerce</a>
        </li>
        <li>
          <a href="https://nairsite.github.io/social-react">Social Media</a>
        </li>
      </div>
    </div>
  );
}

export default App;
