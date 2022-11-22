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
    <div className="text-white">
      {/* Welcome! {auth.user.firstName}{auth.user.lastName}{auth.user.age}{auth.user.weight}{auth.user.email} */}
      <button className='login_button' onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default AuthButton;