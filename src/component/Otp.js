import React from "react";

const Otp = (props) => {
  return (
    <input
      style={{
        display: "inline-block",
        width: "20px",
        height: "20px",
        marginLeft: "5px",
        padding: "5px",
      }}
      key={props.index}
      maxLength={1}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export default Otp;
