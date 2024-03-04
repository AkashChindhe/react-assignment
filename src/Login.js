import logo from "./logo.svg";
import "./App.css";
import MobileNumber from "./component/MobileNumber";
import Password from "./component/Password";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleMobileChange = (value) => {
    setMobileNumber(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLogin = () => {
    const user = {
      mobileNumber,
      password,
    };

    console.log(user);
    navigate("/profile");
  };

  return (
    <div className="App">
      <div>
        <MobileNumber value={mobileNumber} onChange={handleMobileChange} />
        <Password
          value={password}
          onChange={handlePasswordChange}
          label="Enter your password"
        />
        <button
          style={{
            width: "220px",
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#2980B9",
            color: "white",
          }}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
