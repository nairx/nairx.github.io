import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../logo.svg";
import logo1 from "../../logo1.png";
export default function Header() {
  return (
    <div class="App-Header">
      <div>
        <h1 class="title">
          {/* <img src={ logo1 } width="30px" /> */}
          Praveen Nair
        </h1>
      </div>
      <nav>
        <ul>
         
            <Link to="/"> <li>Home</li></Link>
          
          {/* <li>
            <Link to="quiz">Quiz</Link>
          </li>*/}
         
         <li>
            <Link to="resources">Courses</Link>
          </li>
  
           {/* <li>
            <Link to="/User">Member</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
