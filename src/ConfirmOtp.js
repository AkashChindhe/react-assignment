import logo from "./logo.svg";
import "./App.css";
import MobileNumber from "./component/MobileNumber";
import Password from "./component/Password";
import { useState } from "react";
import Otp from "./component/Otp";
import { useNavigate } from "react-router-dom";

function ConfirmOtp() {
  const navigate = useNavigate();
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");

  const confirmOtp = () => {
    // navigate to login page
    navigate("/login");
  };

  return (
    <div className="App">
      <div style={{ marginTop: "50px" }}></div>
      <Otp index="1" value={otp1} onChange={(value) => setOtp1(value)} />
      <Otp index="2" value={otp2} onChange={(value) => setOtp2(value)} />
      <Otp index="3" value={otp3} onChange={(value) => setOtp3(value)} />
      <Otp index="4" value={otp4} onChange={(value) => setOtp4(value)} />
      <Otp index="5" value={otp5} onChange={(value) => setOtp5(value)} />
      <Otp index="6" value={otp6} onChange={(value) => setOtp6(value)} />
      <br />
      <button
        style={{
          marginTop: "20px",
          width: "220px",
          padding: "5px",
          backgroundColor: "#2980B9",
          color: "white",
        }}
        onClick={confirmOtp}
      >
        Confirm
      </button>
    </div>
  );
}

export default ConfirmOtp;
