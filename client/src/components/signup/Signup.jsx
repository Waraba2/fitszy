import "./Signup.css";
import {Link, useNavigate} from "react-router-dom";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useAuth } from '../../AuthContext';
import axios from "axios";

function Signup() {
  const { isLoggedIn, setisLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.get('/api/logout')
      .then(response => {
        console.log(response.data);
        setisLoggedIn(false);
      })
      .catch(error => {
        console.error(error);
        console.error('Logout failed:', error.message);
      });
  };

  if (isLoggedIn) {
    return (
      <div className="Signup">
          <button onClick={handleLogout} className="logout_button">Log Out</button>
        <Avatar sx={{ bgcolor: deepPurple[500] , ml:6}}>OP</Avatar>

      </div>
    );
  }

  return (
    <div className="Signup">
      <Link to="/signup" className="signup_button">
        Sign Up
      </Link>
      <Link to="/login" className="login_button">
        Log In
      </Link>
    </div>
  );
}

export default Signup;

