import React from "react";

const Password = (props) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <input
        style={{ width: "200px", padding: "10px", marginTop: "5px" }}
        type="password"
        placeholder={props.label}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default Password;
