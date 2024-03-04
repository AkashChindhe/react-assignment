import React from "react";

const MobileNumber = (props) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <input
        style={{ width: "200px", padding: "10px", marginTop: "5px" }}
        type="text"
        placeholder="Enter your mobile number"
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default MobileNumber;
