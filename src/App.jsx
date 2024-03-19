import "./App.css";
import React, { useEffect } from "react";
import PoupUp from "./components/PoupUp";
import { useState } from "react";
import List from "./components/List";
import axios from "axios";
function App() {
  const [showPoupUpCreate, setShowPoupUpCreate] = useState(false);
  const [showPoupUpUpdate, setShowPoupUpUpdate] = useState(false);
  const [sponsorsByApi, setSponsorsByApi] = useState([
    {
      _id: Math.random(),
      name: "teste1",
      cnpj: "123",
      description: " O que ue gosto de fazer",
    },
    {
      _id: Math.random(),

      name: "teste2",
      cnpj: "456",
      description: " Eu AMmo hamburg",
    },
    {
      _id: Math.random(),

      name: "teste3",
      cnpj: "789",
      description: " Outra coisa",
    },
  ]);

  const [newSponsor, setNewSponsor] = useState({
    name: "",
    cnpj: "",
    description: "",
  });
  const [updatedSponsor, setupdatedSponsor] = useState({});

  useEffect(() => {
    console.log(updatedSponsor);
  }, [updatedSponsor]);

  useEffect(() => {
    getSponsorsInApi();
  }, []);

  const getSponsorsInApi = async () => {
    await axios
      .get("http://localhost:3000/sponsors")
      .then((response) => {
        console.log(response);
        setSponsorsByApi(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      ...newSponsor,
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
    setSponsorsByApi([...sponsorsByApi, newSponsor]);
    await axios
      .post("http://localhost:3000/sponsors", newSponsor)
      .then(() => {
        getSponsorsInApi();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const submitUpadteSponsor = async () => {
    const { _id, ...rest } = updatedSponsor;
    console.log("submit", _id, rest);
    await axios
      .patch(`localhost:3000/sponsors/${_id}`, rest)
      .then(() => {
        getSponsorsInApi();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <header>
        <h1>Sponsors</h1>
        <button onClick={() => setShowPoupUpCreate(!showPoupUpCreate)}>
          Create
        </button>
        <button onClick={() => setShowPoupUpUpdate(!showPoupUpUpdate)}>
          Update
        </button>
      </header>
      {showPoupUpCreate && (
        <PoupUp
          sponsor={newSponsor}
          onChange={(e) => onCHangeCrete(e)}
          handleSubmit={submitCreateSponsor}
          ctaButton="Criar"
          color="green"
        />
      )}
      {showPoupUpUpdate && (
        <PoupUp
          sponsor={updatedSponsor}
          onChange={(e) => onCHangeUpdate(e)}
          handleSubmit={submitUpadteSponsor}
          ctaButton="Atualizar"
        />
      )}

      <List
        sponsorsByApi={sponsorsByApi}
        handleUpdatedSponsor={handleUpdatedSponsor}
      />
    </div>
  );
}

export default App;
