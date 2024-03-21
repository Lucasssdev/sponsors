import React from "react";
import * as S from "./styles";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function listItem({
  sponsor,
  handleUpdatedSponsor,
  handleDeleteSponsor,
}) {
  return (
    <S.Container>
      <S.Bullet />

      <S.WrapperField>
        {sponsor.name}
        <span>Nome</span>
      </S.WrapperField>

      <S.WrapperField>
        {sponsor.cnpj}
        <span>CNPJ</span>
      </S.WrapperField>

      <S.Description>{sponsor.description}</S.Description>

      <S.WrapperButton>
        <S.Icon icon={faEdit} onClick={() => handleUpdatedSponsor(sponsor)} />

        <S.Icon
          icon={faTrash}
          className="trash"
          onClick={() => handleDeleteSponsor(sponsor.id)}
        />
      </S.WrapperButton>
    </S.Container>
  );
}
