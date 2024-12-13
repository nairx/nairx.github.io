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
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#clients">Clients</a>
              </li>

              <li>
                <a href="#students">Students</a>
              </li>

              <li>
                <a href="#trainers">Trainers</a>
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
              <h1>Full Stack Corporate Trainer</h1>
              <h3>MERN | MEAN | Java | Python</h3>
              <p>
                Over 20 years of experience as Trainer, Application Developer
                and Project Manager in India and USA. Primarily worked for Wipro
                and JP Morgan Chase and currently coach freshers on web
                development technologies such as Reactjs, Nodejs, Expressjs,
                MongoDB, Java, Python, Django, MySQL, Bootstrap, CSS, JavaScript
                and HTML.
              </p>
              <button>Register</button>
              <button>Login</button>
            </div>
            <div className="box">
              <img src="https://picsum.photos/id/1/400/400" alt="Title" />
            </div>
          </div>
        </div>

        <div
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
              <a href="https://praveennair.co.in/ecomm-react/" target="_blank">
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
          id="clients"
          className="row"
          style={{ backgroundColor: "lightblue" }}
        >
          <h1>Clients</h1>
          <div style={{ display: "flex" }}>
         
              1. Wipro, Bangalore 2. Besant Technologies, Bangalore 3. Oxford
              College, Bangalore 4. Elewayte, Bangalore 5. Zognu Technologies,
              Hyderabad 6. NetRichh IT Solutions, Hyderabad 7. Cloud Soft
              Solutions, Hyderabad 8. Vidya Academy, Kerala 9. Aptech Computer
              Education, Kerala 10. First Computers, Bangalore 11. Imarticus
              Learning, Hyderabad 12. Blackbucks, Hyderabad 13. Malla Reddy
              University, Hyderabad 14. GoCinQ, Hyderabad 15. Lyros
              Technologies, Hyderabad 16. Student Tribe, Hyderabad 17. CareerX
              Club, Hyderabad 18. Achievers IT, Hyderabad 19. Numeric
              Technologies, USA 20. Cantilever Labs, Hyderabad 21. Tech Mahindra
              University, Hyderabad 22. GRIET College, Hyderabad
            
          </div>
        </div>

        <div id="students" className="row" style={{ backgroundColor: "white" }}>
          <h1>Students</h1>
          <div style={{ display: "flex" }}>
            <div className="box">
              <h3>Web App Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quia nobis eligendi reiciendis. Esse a possimus eum est
                veritatis aliquid ut eveniet. Et illum odio ut voluptates
                molestiae? Perspiciatis, ab.
              </p>
            </div>

            <div className="box">
              <h3>Mobile App Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quia nobis eligendi reiciendis. Esse a possimus eum est
                veritatis aliquid ut eveniet. Et illum odio ut voluptates
                molestiae? Perspiciatis, ab.
              </p>
            </div>

            <div className="box">
              <h3>Backend Development</h3>
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
          id="trainers"
          className="row"
          style={{ backgroundColor: "lightblue" }}
        >
          <h1>Trainers</h1>
          <div style={{ display: "flex" }}>
            <div className="box">
              <h3>Web App Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quia nobis eligendi reiciendis. Esse a possimus eum est
                veritatis aliquid ut eveniet. Et illum odio ut voluptates
                molestiae? Perspiciatis, ab.
              </p>
            </div>

            <div className="box">
              <h3>Mobile App Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quia nobis eligendi reiciendis. Esse a possimus eum est
                veritatis aliquid ut eveniet. Et illum odio ut voluptates
                molestiae? Perspiciatis, ab.
              </p>
            </div>

            <div className="box">
              <h3>Backend Development</h3>
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
