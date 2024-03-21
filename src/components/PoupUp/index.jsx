import React from "react";
import * as S from "../../styles/components/PoupUp";
import InputText from "../InputText";
export default function PoupUp({
  sponsor,
  onChange,
  ctaButton,
  handleSubmit,
  handleClose,
}) {
  return (
    <>
      <S.Blur onClick={() => handleClose()} />
      <S.PoupUp>
        <S.Title>
          Cadastre um
          <span>Novo Patrocinador</span>
        </S.Title>
        <div className="wrapper-inputs">
          <InputText
            id="name"
            value={sponsor?.name}
            onChange={(e) => onChange(e)}
            placeholder={"Nome"}
          />
          <InputText
            id="cnpj"
            value={sponsor?.cnpj}
            onChange={(e) => onChange(e)}
            placeholder={"CNPJ"}
          />
          <InputText
            id="description"
            value={sponsor?.description}
            onChange={(e) => onChange(e)}
            placeholder={"Descrição"}
          />
        </div>
        <S.WrapperButtons>
          <S.Cancel>
            <p onClick={() => handleClose()}>Cancelar</p>
          </S.Cancel>
          <S.Button onClick={() => handleSubmit()}>{ctaButton}</S.Button>
        </S.WrapperButtons>
      </S.PoupUp>
    </>
  );
}
