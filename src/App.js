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
            Wipro, Bangalore | Besant Technologies, Bangalore | Oxford
            College, Bangalore | Elewayte, Bangalore | Zognu Technologies,
            Hyderabad | NetRichh IT Solutions, Hyderabad | Cloud Soft
            Solutions, Hyderabad | Vidya Academy, Kerala | Aptech Computer
            Education, Kerala | First Computers, Bangalore | Imarticus
            Learning, Hyderabad | Blackbuck, Hyderabad | Malla Reddy
            University, Hyderabad | GoCinQ, Hyderabad | Lyros Technologies,
            Hyderabad | Student Tribe, Hyderabad | CareerX Club, Hyderabad
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
    </>
  );
}

export default App;
