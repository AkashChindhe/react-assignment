import logo from "./logo.svg";
import "./App.css";
import MobileNumber from "./component/MobileNumber";
import Password from "./component/Password";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleMobileChange = (value) => {
    setMobileNumber(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  const handleRegister = () => {
    // TODO: write code to handle registration procedute
    const user = {
      mobileNumber,
      password,
    };

    console.log(user);
    navigate("/confirmOtp");
  };

  return (
    <div className="App">
      <div
        style={{
          marginTop: "100px",
        }}
      >
        <MobileNumber value={mobileNumber} onChange={handleMobileChange} />
        <Password
          value={password}
          onChange={handlePasswordChange}
          label="Enter your password"
        />
        <Password
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          label="Confirm password"
        />
        <button
          style={{
            width: "220px",
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#2980B9",
            color: "white",
          }}
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default App;
