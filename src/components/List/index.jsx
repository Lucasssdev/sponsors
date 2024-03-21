import React from "react";
import * as S from "../../styles/components/List";
import ListItem from "./components/ListItem";

const List = ({
  sponsorsByApi,
  handleUpdatedSponsor,
  handleDeleteSponsor,
  filteredSponsors,
}) => {
  const list =
    Array.isArray(filteredSponsors) && filteredSponsors.length > 0
      ? filteredSponsors
      : sponsorsByApi;
  return (
    <S.Container>
      <S.Title>
        Patrocinadores
        <p className="subtitle">
          Gerencie com eficiência os patrocinadores que apoiam sua organização
          através desta interface intuitiva de CRUD. Aqui, você pode cadastrar
          novos patrocinadores, atualizar informações importantes, visualizar
          todos os colaboradores em um só lugar e remover registros conforme
          necessário
        </p>
      </S.Title>
      <S.Content>
        {list.map((sponsor, index, array) => {
          const reversedIndex = array.length - 1 - index;
          const reversedElement = array[reversedIndex];
          return (
            <ListItem
              key={index}
              sponsor={reversedElement}
              handleDeleteSponsor={handleDeleteSponsor}
              handleUpdatedSponsor={handleUpdatedSponsor}
            />
          );
        })}
      </S.Content>
    </S.Container>
  );
};

export default List;
