import "./App.css";
import { FaGithubSquare, FaLinkedin, FaYoutubeSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from "react-icons/fa";
function App() {
  return (
    <>
      <div className="App">
        <div className="leftBox">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h1>Praveen Nair</h1>
            </div>
            <div>
              <h1>
                <a href="https://github.com/praveannair" target="_blank" rel="noreferrer">
                  <FaGithubSquare />
                </a>
                <a href="https://in.linkedin.com/in/nairprv" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.youtube.com/@praveen-nair" target="_blank" rel="noreferrer">
                  <FaYoutubeSquare />
                </a>
      
                
              </h1>
            </div>
          </div>
          <div className="App-title">MERN Stack Trainer & Developer</div>
          <p className="App-companies">
            Over 20 years of experience as Trainer, Application Developer and
            Project Manager in India and USA. I have primarily worked for Wipro
            and JP Morgan Chase and currently coach freshers on web development
            technologies such as Reactjs, Nodejs, Expressjs, MongoDB, MySQL,
            Bootstrap, CSS, JavaScript and HTML.
          </p>
          {/* <br></br>
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
          </div> */}
          <h1>Top Clients</h1>
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
            <a href="https://nairx.github.io/ecomm-react">ecomm-react</a>
          </li>
          <li>
            <a href="https://nairx.github.io/social-react">social-react</a>
          </li>
        </div>
      </div>
    </>
  );
}

export default App;
