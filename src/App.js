import React from "react";
import "./App.css"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt neque est nihil ipsum error. Deserunt voluptas
                explicabo ea eum quasi. Rem nisi molestias quia nesciunt
                incidunt numquam fugiat perferendis assumenda?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt neque est nihil ipsum error. Deserunt voluptas
                explicabo ea eum quasi. Rem nisi molestias quia nesciunt
                incidunt numquam fugiat perferendis assumenda?
              </p>
              <button>Register</button>
              <button>Login</button>
            </div>
            <div className="box">
              <img src="https://picsum.photos/id/1/400/400" alt="Title" />
            </div>
          </div>
        </div>

        <div id="about" className="row" style={{backgroundColor: 'lightcoral'}}>
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

        <div id="projects" className="row" >
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
              <a href="https://praveennair.co.in/ecomm-react/">View Project</a>
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
          id="students"
          className="row"
          style={{ backgroundColor: "white" }}
        >
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
