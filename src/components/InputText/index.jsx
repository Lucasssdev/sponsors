import React from "react";
import * as S from "../../styles/components/InputText";
import { useState } from "react";
const InputText = ({ placeholder, onChange, value, id }) => {
  const realValue = value !== "" ? value : undefined;
  const [inFocus, setInFocus] = useState(false);
  return (
    <S.InputContainer>
      <S.Input
        type="text"
        id={id}
        value={realValue}
        onChange={onChange}
        onFocus={() => setInFocus(true)}
        onBlur={() => setInFocus(false)}
      />
      <S.Label
        htmlFor="input"
        className={inFocus || realValue ? "inFocus" : ""}
      >
        {placeholder}{" "}
      </S.Label>
      <S.Underline className={inFocus || realValue ? "inFocus" : ""} />
    </S.InputContainer>
  );
};

export default InputText;
