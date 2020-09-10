import React from "react";

const InputBox = (props) => {
  return (
    <div>
      <input
        style={{ marginBottom: "10px" }}
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default InputBox;
