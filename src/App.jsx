import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import * as S from "./styles/globalCss";
import PoupUp from "./components/PoupUp";
import List from "./components/List";
import axios from "axios";
import "./App.css";

function App() {
  // Define estado para controlar a exibição do popup de criação de patrocinador
  const [showPoupUpCreate, setShowPoupUpCreate] = useState(false);

  // Define estado para controlar a exibição do popup de atualização de patrocinador
  const [showPoupUpUpdate, setShowPoupUpUpdate] = useState(false);

  // Define estado para armazenar o termo de pesquisa
  const [searchTerm, setSearchTerm] = useState("");

  // Define estado para armazenar os patrocinadores recebidos da API
  const [sponsorsByApi, setSponsorsByApi] = useState([]);

  // Define estado para armazenar os patrocinadores filtrados com base no termo de pesquisa
  const [filteredSponsors, setFilteredSponsors] = useState([]);

  // Define estado para armazenar os detalhes do novo patrocinador a ser criado
  const [newSponsor, setNewSponsor] = useState({
    name: "",
    cnpj: "",
    description: "",
  });

  // Define estado para armazenar os detalhes do patrocinador a ser atualizado
  const [updatedSponsor, setupdatedSponsor] = useState({});

  // Efeito para buscar os patrocinadores da API ao montar o componente
  useEffect(() => {
    getSponsorsInApi();
  }, []);

  // Efeito para filtrar os patrocinadores com base no termo de pesquisa
  useEffect(() => {
    handleListSearch();
  }, [searchTerm]);

  // Função para lidar com a mudança no campo de pesquisa
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Função para filtrar os patrocinadores com base no termo de pesquisa
  const handleListSearch = () => {
    const filteredSponsors = sponsorsByApi.filter((sponsor) =>
      sponsor.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredSponsors(filteredSponsors);
  };

  // Função para buscar os patrocinadores da API
  const getSponsorsInApi = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/all`)
      .then((response) => {
        setSponsorsByApi(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Função para atualizar o estado do novo patrocinador ao digitar nos campos de criação
  const onChangeCreate = (e) => {
    const { id, value } = e.target;
    setNewSponsor({
      ...newSponsor,
      [id]: value,
    });
  };

  // Função para atualizar o estado do patrocinador a ser atualizado ao digitar nos campos de atualização
  const onChangeUpdate = (e) => {
    const { id, value } = e.target;
    setupdatedSponsor({
      ...updatedSponsor,
      [id]: value,
    });
  };

  // Função para lidar com a atualização de um patrocinador
  const handleUpdatedSponsor = (sponsor) => {
    setupdatedSponsor(sponsor);
    showPoupUpCreate && setShowPoupUpCreate(false);
    setShowPoupUpUpdate(true);
  };

  // Função para submeter a criação de um novo patrocinador
  const submitCreateSponsor = async () => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/create`, newSponsor)
      .then(async (res) => {
        await getSponsorsInApi();
        setShowPoupUpCreate(false);
        setNewSponsor({ name: "", cnpj: "", description: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Função para submeter a atualização de um patrocinador existente
  const submitUpadteSponsor = async () => {
    const { id, updatedAt, ...rest } = updatedSponsor;
    await axios
      .patch(`${process.env.REACT_APP_API_URL}/update/${id}`, rest)
      .then(async (res) => {
        await getSponsorsInApi();
        setShowPoupUpUpdate(false);
        setupdatedSponsor({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Função para lidar com a exclusão de um patrocinador
  const handleDeleteSponsor = async (sponsorId) => {
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/${sponsorId}`)
      .then(async (res) => {
        await getSponsorsInApi();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <S.Container>
      <Header
        onClickButton={() => setShowPoupUpCreate(!showPoupUpCreate)}
        handleSearchChange={handleSearchChange}
        searchTerm={searchTerm}
      />
      <List
        sponsorsByApi={sponsorsByApi}
        filteredSponsors={filteredSponsors}
        handleUpdatedSponsor={handleUpdatedSponsor}
        handleDeleteSponsor={handleDeleteSponsor}
      />
      <Footer />
      {showPoupUpCreate && (
        <PoupUp
          sponsor={newSponsor}
          onChange={(e) => onChangeCreate(e)}
          handleSubmit={submitCreateSponsor}
          ctaButton="Criar"
          handleClose={() => {
            setShowPoupUpCreate(false);
            setNewSponsor({ name: "", cnpj: "", description: "" });
          }}
        />
      )}
      {showPoupUpUpdate && (
        <PoupUp
          sponsor={updatedSponsor}
          onChange={(e) => onChangeUpdate(e)}
          handleSubmit={submitUpadteSponsor}
          ctaButton="Atualizar"
          handleClose={() => setShowPoupUpUpdate(false)}
        />
      )}
    </S.Container>
  );
}

export default App;
