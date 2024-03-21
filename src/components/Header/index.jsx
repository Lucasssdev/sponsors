import React from "react";
import * as S from "../../styles/components/Header";
import InputSearch from "../InputSearch";

export default function Header({
  onClickButton,
  handleSearchChange,
  searchTerm,
}) {
  return (
    <S.Container>
      <S.Logo>Eng. de Software</S.Logo>
      <InputSearch
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar patrocinador..."
      />
      <S.Button onClick={() => onClickButton()}>Cadastrar</S.Button>
    </S.Container>
  );
}
