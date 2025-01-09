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
                <a href="#clients">Clients</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>

              <li style={{backgroundColor:'white',borderRadius:'10px'}}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row" id="home">
          <div className="flex">
            <div className="box">
              <h1>MERN Stack Corporate Trainer</h1>
              <h3>MongoDB | Expressjs | Reactjs | Nodejs</h3>
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
              justifyContent: "center",flexWrap:"wrap",
              margin: "10px",
            }}
          >
            <div>
              <li className="course">
                <b>Module 1: Introduction to MERN Stack</b><hr></hr>
                Setting up the environment.<br></br>
                Node.js and npm installation.<br></br>
                Code editors (e.g., VS Code).<br></br>
                Introduction to GitHub.<br></br>
                Basics of HTML, CSS and JavaScript
              </li>
              <li className="course">
                <b>Module 4: Frontend Development</b><hr></hr>
                Components, Props, and State.<br></br>
                React hooks (useState, useEffect).<br></br>
                State management with Context API.<br></br>
                React Router for navigation.<br></br>
                Fetching data from APIs using Axios.<br></br>
              </li>
             
            </div>
            <div>
            <li className="course">
                <b>Module 2: MongoDB Basics</b><hr></hr>
                Introduction to NoSQL databases.<br></br>
                CRUD operations using MongoDB.<br></br>
                Connecting MongoDB with Node.js.<br></br>
                Setting up MongoDB Atlas.<br></br>
              </li>
             
              <li className="course">
                <b>Module 5: Deployment and Best Practices</b><hr></hr>
                Deploying the Frontend App.<br></br>
                Deploying the Backend App.<br></br>
                Environment variables and security.<br></br>
              </li>
            </div>
            <div>
            <li className="course">
                <b>Module 3: Backend Development</b><hr></hr>
                Overview of top backend technologies.<br></br>
                Introduction to Nodejs.<br></br>
                Introduction to Express.js and RESTful APIs.<br></br>
                Building APIs: GET, POST, PUT, DELETE.<br></br>
                Middleware in Express.js<br></br>
              </li>
              
              <li className="course">
                <b>Module 6: E-commerce Store Project</b><hr></hr>
                Product listing<br></br>
                Cart functionality<br></br>
                Backend integration.<br></br>
              </li>
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
              justifyContent: "center",flexWrap:"wrap",
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

        <div id="projects" className="row">
          <h2>Projects</h2>
          <div style={{ display: "flex" }}>
            <div className="box" style={{ border: "1px solid silver" }}>
              <h3>
                E-commerce |{" "}
                <a href="https://nairx.github.io/ecomm-react/" target="_blank">
                  View Demo
                </a>
              </h3>
              <img src="ecomm.jpg" width="400px" />
            </div>
            <div className="box">
              <h3>Project 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quia nobis eligendi reiciendis. Esse a possimus eum est
                veritatis aliquid ut eveniet. Et illum odio ut voluptates
                molestiae? Perspiciatis, ab.
              </p>
            </div>
            <div className="box">
              <h3>Project 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quia nobis eligendi reiciendis. Esse a possimus eum est
                veritatis aliquid ut eveniet. Et illum odio ut voluptates
                molestiae? Perspiciatis, ab.
              </p>
            </div>
          </div>
        </div>
        {/* <div
          id="contact"
          className="row"
          style={{ backgroundColor: "lightgoldenrodyellow" }}
        >
          <h2>Contact</h2>
          <div style={{ display: "flex" }}>
            <div className="box">
              <p>
                <input type="text" placeholder="Enter Name" />
              </p>
              <p>
                <input type="email" placeholder="Enter Email" />
              </p>
              <p>
                <textarea
                  rows="10"
                  cols="60"
                  placeholder="Enter message"
                ></textarea>
              </p>
              <button>Send</button>
            </div>
            <div className="box">
              <p>
                <b>Address: </b>This is a sample address and can be replaced.
              </p>
              <p>
                <b>Email Address: </b>sample@email.com
              </p>
              
            </div>
          </div>
        </div> */}

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
