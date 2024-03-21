// App.js

import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import * as S from "./styles/globalCss";
import PoupUp from "./components/PoupUp";
import List from "./components/List";
import axios from "axios";
import "./App.css";

function App() {
  const [showPoupUpCreate, setShowPoupUpCreate] = useState(false);
  const [showPoupUpUpdate, setShowPoupUpUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sponsorsByApi, setSponsorsByApi] = useState([]);
  const [filteredSponsors, setFilteredSponsors] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleListSearch = () => {
    const filteredSponsors = sponsorsByApi.filter((sponsor) =>
      sponsor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSponsors(filteredSponsors);
    console.log(filteredSponsors);
    //return filteredSponsors;
  };
  console.log(filteredSponsors);
  const [newSponsor, setNewSponsor] = useState({
    name: "",
    cnpj: "",
    description: "",
  });
  useEffect(() => {
    console.log(newSponsor);
  }, [newSponsor]);
  const [updatedSponsor, setupdatedSponsor] = useState({});

  useEffect(() => {
    console.log(sponsorsByApi);
  }, [sponsorsByApi]);

  useEffect(() => {
    getSponsorsInApi();
  }, []);

  const getSponsorsInApi = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/all`)
      .then((response) => {
        console.log(response);
        setSponsorsByApi(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(searchTerm);
    handleListSearch();
  }, [searchTerm]);
  const onCHangeCrete = (e) => {
    const { id, value } = e.target;
    setNewSponsor({
      ...newSponsor,
      [id]: value,
    });
  };
  const onCHangeUpdate = (e) => {
    const { id, value } = e.target;
    setupdatedSponsor({
      ...updatedSponsor,
      [id]: value,
    });
  };
  const handleUpdatedSponsor = (sponsor) => {
    console.log("1aqui", sponsor);
    setupdatedSponsor(sponsor);
    showPoupUpCreate && setShowPoupUpCreate(false);
    setShowPoupUpUpdate(true);
  };

  const submitCreateSponsor = async () => {
    //setSponsorsByApi([...sponsorsByApi, newSponsor]);
    console.log("aui");
    await axios
      .post(`${process.env.REACT_APP_API_URL}/create`, newSponsor)
      .then(async (res) => {
        console.log(res);

        await getSponsorsInApi();
        setShowPoupUpCreate(false);
        setNewSponsor({ name: "", cnpj: "", description: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const submitUpadteSponsor = async () => {
    const { id, ...rest } = updatedSponsor;
    console.log("submit", id, rest);
    await axios
      .patch(`${process.env.REACT_APP_API_URL}/update/${id}`, rest)
      .then(async (res) => {
        console.log(res);
        await getSponsorsInApi();
        setShowPoupUpUpdate(false);
        setupdatedSponsor({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteSponsor = async (sponsorId) => {
    console.log("entrou", sponsorId);
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/${sponsorId}`)
      .then(async (res) => {
        console.log(res);
        await getSponsorsInApi();
        setShowPoupUpUpdate(false);
        setupdatedSponsor({});
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
      {/*       <Footer /> */}
      {showPoupUpCreate && (
        <PoupUp
          sponsor={newSponsor}
          onChange={(e) => onCHangeCrete(e)}
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
          onChange={(e) => onCHangeUpdate(e)}
          handleSubmit={submitUpadteSponsor}
          ctaButton="Atualizar"
          handleClose={() => setShowPoupUpUpdate(false)}
        />
      )}
    </S.Container>
  );
}

export default App;
