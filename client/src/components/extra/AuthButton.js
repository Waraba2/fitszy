import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AuthButton = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.isAuthenticated && auth.user === false) {
    return (
      <Link className='login_button' to="/login">
        Login
      </Link>
    );
  }

  const logout = () => {
    // auth.signout().then(() => navigate("/"));
    auth.signout()
    navigate("/")
  };

  return (
    <div>
      {/* <button className='login_button' onClick={logout}>
        Logout
      </button> */}
    </div>
  );
};

export default AuthButton;