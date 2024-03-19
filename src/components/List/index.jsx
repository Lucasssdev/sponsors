import React from "react";
import * as S from "../../styles/components/List";

export default function List({ sponsorsByApi, handleUpdatedSponsor }) {
  return (
    <S.Container>
      {sponsorsByApi.map((sponsor) => {
        return (
          <S.ItemList>
            <S.Name>{sponsor.name}</S.Name>
            <S.Name>{sponsor.cnpj}</S.Name>
            <button onClick={() => handleUpdatedSponsor(sponsor)}>edit</button>
          </S.ItemList>
        );
      })}
    </S.Container>
  );
}
