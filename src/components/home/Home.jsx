import "./Home.css";
import linkedin from "../../linkedin.png";
export default function Home() {
  return (
    <div>
      <div
        className="App-Home-Row"
        style={{
          backgroundColor: "white",
          paddingBottom: "0px",
          marginBottom: "0px",
          
        }}
      >
        <div className="box">
          <h1>Full Stack Corporate Trainer</h1>
          <h3>MERN | Python | Java | Nextjs</h3>
          <p>
            Over 20 years of experience as Trainer, Application Developer and
            Project Manager in India and USA. Primarily worked for Wipro and JP
            Morgan Chase.
          </p>
          <a href="https://www.linkedin.com/in/nairprv/">
            <img
              src="../../images/linkedin.png"
              className="lnkBtn"
              style={{ width: "100px" }}
            />
          </a>
          <a href="https://www.youtube.com/@praveen-nair/playlists">
            <img
              src="../../images/youtube.png"
              className="lnkBtn"
              style={{ width: "95px" }}
            />
          </a>
          {/* <button className="btn">Register</button>
          <button className="btn">Login</button> */}
        </div>
        <div className="box" style={{width:'500px',textAlign:'end'}}>
          <img src="images/mypic.png" width="350px" alt="progress" />
        </div>
      </div>

      <div className="App-Home">
        <div className="section" style={{ backgroundColor: "#eeeeee" }}>
          <div className="App-Home-Row">
            <div className="count">
              <h1>
                2000+<br></br> Students
              </h1>
            </div>
            <div className="count">
              <h1>
                5000+<br></br> Training Hours
              </h1>
            </div>
            <div className="count">
              <h1>
                50+<br></br>Clients
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="App-Home">
        <div className="section">
          <h1>Trusted By Top Companies</h1>
          <div className="App-Home-Row">
            {/* <marquee> */}
            <img src="images/clients/wipro.svg" className="clientImg" />
            <img src="images/clients/jpmc.svg" className="clientImg" />
            <img src="images/clients/cantilever.png" className="clientImg" />
            <img src="images/clients/griet.png" className="clientImg" />
            <img src="images/clients/blackbucks.png" className="clientImg" />
            <img src="images/clients/mahindra.svg" className="clientImg" />
            {/* </marquee> */}
            {/* <marquee direction="right"> */}
            <img src="images/clients/mallareddy.png" className="clientImg" />
            <img src="images/clients/achieversit.png" className="clientImg" />
            <img src="images/clients/besant.png" className="clientImg" />
            <img src="images/clients/lyros.jpg" className="clientImg" />
            <img src="images/clients/peakin.png" className="clientImg" />
            <img src="images/clients/ntc.png" className="clientImg" />
            <img
              src="images/clients/st.png"
              style={{ backgroundColor: "red" }}
              className="clientImg"
            />
            <img src="images/clients/oxford.png" className="clientImg" />
            <img src="images/clients/cloudsoft.jpg" className="clientImg" />
            <img src="images/clients/imarticus.jpg" className="clientImg" />
            <img
              src="images/clients/gocinq.png"
              style={{ backgroundColor: "black" }}
              className="clientImg"
            />
            <img src="images/clients/elewayte.jpg" className="clientImg" />
            {/* </marquee> */}
          </div>
        </div>
      </div>
      <div className="App-Home">
        <div className="section" style={{ backgroundColor: "#eeeeee" }}>
          <h1>Full Stack Courses Offered</h1>
          <div className="App-Home-Row">
            <div className="course">
              <h2>MERN Stack</h2>
              <p>HTML, CSS, JavaScript, Reactjs, Expressjs, Nodejs & MongoDB</p>
            </div>
            <div className="course">
              <h2>Python Full Stack</h2>
              <p>HTML, CSS, JavaScript, Reactjs, Python, Django & MySQL</p>
            </div>
            <div className="course">
              <h2>Java Full Stack</h2>
              <p>HTML, CSS, JavaScript, Reactjs, Java, Spring Boot & MySQL</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="App-Home">
        <div className="section">
          <h1>Client Reviews
          </h1>
          <div className="App-Home-Row">
            <marquee>
              <div className="review">
                <h2>MERN Stack</h2>
                <p>
                  HTML, CSS, JavaScript, Reactjs, Expressjs, Nodejs & MongoDB
                </p>
              </div>
            </marquee>
          </div>
        </div>
      </div> */}

      <div className="App-Home" style={{ backgroundColor: "white" }}>
        <h1>Gallery</h1>
        <div className="App-Home-Row">
          <div className="gallery">
            <img className="image" src="images/1.jpg" />
            <h3>Student Tribe</h3>
            <p>
              Excited to conduct MERN stack training program for the students of
              Student Tribe.
            </p>
          </div>
          <div className="gallery">
            <img className="image" src="images/2.jpg" />
            <h3>GRIET College</h3>
            <p>
              Great moments with these amazing MERN Stack learners at GRIET
              college, Hyderabad.
            </p>
          </div>
          <div className="gallery">
            <img className="image" src="images/4.jpg" />
            <h3>Mahindra University</h3>
            <p>
              It was an honour to begin MERN stack training for Mahindra
              University students.
            </p>
          </div>
        </div>
      </div>
      <div className="App-Home">
        <div className="section" style={{ backgroundColor: "#eeeeee" }}>
          <h1>Frequently Asked Questions</h1>
          <details className="App-Faq">
            <summary>
              <b>What is Full-Stack Development?</b>
            </summary>
            <p>
              Full-stack development involves creating the entire application,
              from the user-facing interface to the underlying infrastructure.
              It combines front-end (client-side) and back-end (server-side)
              development skills.
            </p>
          </details>

          <details className="App-Faq">
            <summary>
              <b>What Skills are Covered in a Full Stack Course?</b>
            </summary>
            <p>
              Front-end: HTML, CSS, JavaScript, and frameworks like React or
              Angular.<br></br>
              Back-end: Server-side languages like Node.js, Python, or Java, and
              databases like MongoDB or MySQL.<br></br>
              Other important skills: Version control (Git), APIs, and cloud
              platforms (AWS, Azure, etc.).<br></br>
            </p>
          </details>
          <details className="App-Faq">
            <summary>
              <b>Why is Full-Stack Development in Demand?</b>
            </summary>
            <p>
              Companies often seek developers who can manage both front-end and
              back-end development, ensuring seamless integration between user
              interfaces and server-side operations.
            </p>
          </details>
          <details className="App-Faq">
            <summary>
              <b>How Long Does it Take to Become a Full Stack Developer?</b>
            </summary>
            <p>
              With prior coding experience, you might be able to transition to
              full-stack in 3-6 months of full-time study. For those new to
              coding, it could take longer, potentially 6-12 months or more.
            </p>
          </details>
          <details className="App-Faq">
            <summary>
              <b>What are the salary expectations for a full stack developer in India?</b>
            </summary>
            <p>
            The average salary for a full-stack developer in India is ₹7,00,000 per year.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
