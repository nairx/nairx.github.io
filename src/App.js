import React from "react";
import "./App.css";
export default function App() {
  return (
    <>
      <div className="container">
        <div className="header-row">
          <div className="box">
            <h1>Praveen Nair</h1>
          </div>
          <div className="box">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#course">Courses</a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#clients">Clients</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row" id="home">
          <div className="flex">
            <div className="box">
              <h1>MERN | MEAN | Python | JAVA</h1>
              <h3>Full Stack Corporate Trainer</h3>
              <p>
                Over 20 years of experience as Trainer, Application Developer
                and Project Manager in India and USA. Primarily worked for Wipro
                and JP Morgan Chase.
              </p>
              <button>Register</button>
              <button>Login</button>
            </div>
            <div className="box">
              <img src="wallpaper.png" alt="progress" width="100%" />
            </div>
          </div>
        </div>

        <div
          id="course"
          className="row"
          style={{ backgroundColor: "lightcoral" }}
        >
          <h2>MERN Stack Crash Course</h2>
          <div
            class="c"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "10px",
            }}
          >
            <div>
              <li className="course">
                <b>Module 1: Introduction to MERN Stack</b>
                <hr></hr>
                Setting up the environment.<br></br>
                Node.js and npm installation.<br></br>
                Code editors (e.g., VS Code).<br></br>
                Introduction to GitHub.<br></br>
                Basics of HTML, CSS and JavaScript
              </li>
              <li className="course">
                <b>Module 4: Frontend Development</b>
                <hr></hr>
                Components, Props, and State.<br></br>
                React hooks (useState, useEffect).<br></br>
                State management with Context API.<br></br>
                React Router for navigation.<br></br>
                Fetching data from APIs using Axios.<br></br>
              </li>
            </div>
            <div>
              <li className="course">
                <b>Module 2: MongoDB Basics</b>
                <hr></hr>
                Introduction to NoSQL databases.<br></br>
                CRUD operations using MongoDB.<br></br>
                Connecting MongoDB with Node.js.<br></br>
                Setting up MongoDB Atlas.<br></br>
              </li>

              <li className="course">
                <b>Module 5: Deployment and Best Practices</b>
                <hr></hr>
                Deploying the Frontend App.<br></br>
                Deploying the Backend App.<br></br>
                Environment variables and security.<br></br>
              </li>
            </div>
            <div>
              <li className="course">
                <b>Module 3: Backend Development</b>
                <hr></hr>
                Overview of top backend technologies.<br></br>
                Introduction to Nodejs.<br></br>
                Introduction to Express.js and RESTful APIs.<br></br>
                Building APIs: GET, POST, PUT, DELETE.<br></br>
                Middleware in Express.js<br></br>
              </li>

              <li className="course">
                <b>Module 6: E-commerce Store Project</b>
                <hr></hr>
                Product listing<br></br>
                Cart functionality<br></br>
                Backend integration.<br></br>
              </li>
            </div>
          </div>
        </div>

        <div id="projects" className="row">
          <h2>Projects</h2>
          <div style={{ display: "flex" }}>
            <div className="box" style={{ border: "1px solid silver" }}>
              <h3>
                E-commerce | <a href="https://nairx.github.io/ecomm-react/" target="_blank">
                  View Demo
                </a>
              </h3>
              <img src="ecomm.jpg" width="400px" />
            </div>
            <div className="box" style={{ border: "1px solid silver" }}>
            <h3>
                Social Media | <a href="https://nairx.github.io/myspace/" target="_blank">
                  View Demo
                </a>
              </h3>
              <img src="myspace.jpg" width="400px" />
            </div>
            <div className="box" style={{ border: "1px solid silver" }}>
            <h3>
                Weather App | <a href="https://nairx.github.io/myweatherapp/" target="_blank">
                  View Demo
                </a>
              </h3>
              <img src="weather.jpg" width="400px" />
            </div>
          </div>
        </div>

        <div
          id="clients"
          className="row"
          style={{ backgroundColor: "lightblue" }}
        >
          <h2>Trusted By Top Institutes Across India</h2>
          <div
            class="c"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "10px",
            }}
          >
            <div>
              <li>Wipro, Bangalore</li>
              <li>Besant Technologies, Bangalore</li>
              <li>Oxford College, Bangalore</li>
              <li>Elewayte, Bangalore</li>
              <li>Student Tribe, Hyderabad</li>
              <li>GRIET College, Hyderabad</li>
            </div>
            <div>
              <li>Zognu Technologies, Hyderabad</li>
              <li>NetRichh IT Solutions, Hyderabad</li>
              <li>Cloud Soft Solutions, Hyderabad</li>
              <li>Vidya Academy, Kerala</li>
              <li>Lyros Technologies, Hyderabad</li>
              <li>GoCinQ, Hyderabad </li>
            </div>
            <div>
              <li>Aptech Computer Education, Kerala</li>
              <li>First Computers, Bangalore</li>{" "}
              <li>Imarticus Learning, Hyderabad</li>
              <li>Blackbucks, Hyderabad</li>
              <li> Malla Reddy University, Hyderabad</li>
              <li>Mahindra University, Hyderabad</li>
            </div>
            <div>
              <li>CareerX Club, Hyderabad</li>
              <li>Achievers IT, Hyderabad</li>
              <li>Numeric Technologies, USA</li>
              <li>Cantilever Labs, Hyderabad</li>
            </div>
          </div>
        </div>

        <div id="gallery" className="row" style={{ backgroundColor: "white" }}>
          <h2>Gallery</h2>
          <div style={{ display: "flex" }}>
            <div className="box">
              <img className="image" src="1.jpg" />
              <h3>Student Tribe</h3>
              <p>Excited to conduct MERN stack training program for the students of Student Tribe.</p>
            </div>
            <div className="box">
              <img className="image" src="2.jpg" />
              <h3>GRIET College</h3>
              <p>Great moments with these amazing MERN Stack learners at GRIET college, Hyderabad.</p>
            </div>
            <div className="box">
              <img className="image" src="4.jpg" />
              <h3>Mahindra University</h3>
              <p>
                It was an honour to begin MERN stack training for
                Mahindra University students.
              </p>
            </div>
          </div>
        </div>

        <div id="contact" className="footer">
          <p>Accessibility</p>
          <p>Email: praveen@email.com</p>
          <p> Phone: 123-123-1234</p>
          <p>Copyright © 2024 Praveen Teachings., All rights reserved.</p>
          <p>Terms and Conditions | Privacy Policy</p>
        </div>
      </div>
    </>
  );
}
