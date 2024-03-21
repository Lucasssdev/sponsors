import React from "react";
import * as S from "../../styles/components/Header";

export default function Header({
  onClickButton,
  handleSearchChange,
  searchTerm,
}) {
  return (
    <S.Container>
      <S.Logo>Eng. de Software</S.Logo>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar patrocinador..."
      />
      <S.Button onClick={() => onClickButton()}>Cadastrar</S.Button>
    </S.Container>
  );
}
