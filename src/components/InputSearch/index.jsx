import React from "react";
import * as S from "../../styles/components/InputSearch";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function InputSearch({ placeholder, onChange, value, id }) {
  return (
    <S.ContainerInput>
      <S.Icon icon={faMagnifyingGlass} />
      <S.Input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />{" "}
    </S.ContainerInput>
  );
}

export default InputSearch;
