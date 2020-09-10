import React, { useState } from "react";

import InputBox from "./InputBox";
import Button from "./Button";

const LoginBox = (props) => {
  const [inputBoxValue, setInputBoxValue] = useState("");

  return (
    <div className="ui segment">
      <div className="ui form">
        <InputBox value={inputBoxValue} onChange={setInputBoxValue} />
        <Button inputBoxValue={inputBoxValue} />
      </div>
    </div>
  );
};

export default LoginBox;
