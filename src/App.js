import "./App.css";
import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
function App() {
  return (
    <>
      <div className="App">
        <div className="leftBox">
          <h1>Praveen Nair</h1>
          <div className="App-title">MERN Stack Trainer & Developer</div>
          <br></br>
          <div className="App-icons">
            <a href="https://github.com/nairsite">
              <FaGithubSquare />
            </a>
            <a href="https://in.linkedin.com/in/nairprv">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@praveen-nair">
              <FaYoutubeSquare />
            </a>
          </div>
          <h1>Clients</h1>
          <div className="App-companies">
            Wipro | Besant Technologies | Oxford College | Elewayte | Zognu
            Technologies | NetRichh IT Solutions | Cloud Soft Solutions | Vidya
            Academy | Aptech Computer Education | First Computers | Imarticus
            Learning | Blackbuck | Malla Reddy University | GoCinQ | Lyros
            Technologies | Student Tribe | CareerX Club
          </div>
        </div>
        <div className="rightBox">
          <h1>Projects</h1>
          <li>
            <a href="https://nairsite.github.io/ecomm-react">ecomm-react</a>
          </li>
          <li>
            <a href="https://nairsite.github.io/social-react">social-react</a>
          </li>
        </div>
      </div>
    </>
  );
}

export default App;
