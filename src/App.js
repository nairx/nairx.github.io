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
              {/* <li>
                <a href="#about">About</a>
              </li> */}

              <li>
                <a href="#clients">Clients</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
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
              <h1>MERN Stack Corporate Trainer</h1>
              <h3>JavaScript | Reactjs | Nodejs | MongoDB</h3>
              <p>
                Over 20 years of experience as Trainer, Application Developer
                and Project Manager in India and USA. Primarily worked for Wipro
                and JP Morgan Chase.
              </p>
              <button>Register</button>
              <button>Login</button>
            </div>
            <div className="box">
              <img src="https://picsum.photos/id/1/400/400" alt="Title" />
            </div>
          </div>
        </div>

        {/* <div
          id="about"
          className="row"
          style={{ backgroundColor: "lightcoral" }}
        >
          <h1>About</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sint
            optio labore a obcaecati. Ullam distinctio corrupti autem. Veritatis
            ipsa veniam deserunt asperiores nesciunt at provident itaque
            cupiditate vel dolor.
          </h3>
          <h2>Skills</h2>
          <h3>Java, Python, Reactjs</h3>
          <p>Display the logo of all the technologies you know.</p>
        </div> */}

        <div
          id="clients"
          className="row"
          style={{ backgroundColor: "lightblue" }}
        >
          <h1>Clients</h1>
          <div class="c"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <div>
              <li>Wipro, Bangalore</li>
              <li>Besant Technologies, Bangalore</li>
              <li>Oxford College, Bangalore</li>
              <li>Elewayte, Bangalore</li>
              <li>Zognu Technologies, Hyderabad</li>
              <li>NetRichh IT Solutions, Hyderabad</li>
              <li>Cloud Soft Solutions, Hyderabad</li>
              <li>Vidya Academy, Kerala</li>
            </div>
            <div>
              <li>Aptech Computer Education, Kerala</li>
              <li>First Computers, Bangalore</li>{" "}
              <li>Imarticus Learning, Hyderabad</li>
              <li>Blackbucks, Hyderabad</li>
              <li> Malla Reddy University, Hyderabad</li>
              <li>GoCinQ, Hyderabad </li>
              <li>Lyros Technologies, Hyderabad</li>
              <li>Student Tribe, Hyderabad</li>
            </div>
            <div>
              <li>CareerX Club, Hyderabad</li>
              <li>Achievers IT, Hyderabad</li>
              <li>Numeric Technologies, USA</li>
              <li>Cantilever Labs, Hyderabad</li>
              <li>Mahindra University, Hyderabad</li>
              <li>GRIET College, Hyderabad</li>
            </div>
          </div>
        </div>

        <div id="projects" className="row">
          <h1>Projects</h1>
          <div style={{ display: "flex" }}>
            <div className="box">
              <h3>E-commerce</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quia nobis eligendi reiciendis. Esse a possimus eum est
                veritatis aliquid ut eveniet. Et illum odio ut voluptates
                molestiae? Perspiciatis, ab.
              </p>
              <a href="https://nairx.github.io/ecomm-react/" target="_blank">
                View Project
              </a>
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
        <div
          id="contact"
          className="row"
          style={{ backgroundColor: "lightgoldenrodyellow" }}
        >
          <h1>Contact</h1>
          <div style={{ display: "flex" }}>
            <div className="box">
              <h3>Contact Form</h3>
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
              <h3>Your/Company Name</h3>
              <p>
                <b>Address: </b>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolorem quia nobis eligendi reiciendis. Esse a
                possimus eum est veritatis aliquid ut eveniet. Et illum odio ut
                voluptates molestiae? Perspiciatis, ab.
              </p>
              <p>
                <b>Email Address: </b>sample@email.com
              </p>
              <p>
                <b>Phone Number: </b>+91 343 445 6789
              </p>
            </div>
          </div>
        </div>
        <div className="footer">@copyright 2024. All rights reserved.</div>
      </div>
    </>
  );
}
