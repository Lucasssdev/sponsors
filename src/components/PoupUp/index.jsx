import React from "react";
import * as S from "../../styles/components/PoupUp";

export default function PoupUp({
  sponsor,
  onChange,
  ctaButton,
  handleSubmit,
  color,
}) {
  return (
    <S.Container color={color}>
      Sponsors Page
      <input
        id="name"
        type="text"
        value={sponsor?.name}
        onChange={(e) => onChange(e)}
      />
      <input
        id="cnpj"
        type="text"
        value={sponsor?.cnpj}
        onChange={(e) => onChange(e)}
      />
      <input
        id="description"
        type="text"
        value={sponsor?.description}
        onChange={(e) => onChange(e)}
      />
      <button onClick={() => handleSubmit()}>{ctaButton}</button>
    </S.Container>
  );
}
