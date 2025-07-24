"use client";
import { Box, Typography } from "@mui/material";
import Weight from "./components/weight/Weight";
import Dehydration from "./components/dehydration/Dehydration";
import Losses from "./components/losses/Losses";
import Results from "./components/results/Results";
import { useState, useEffect } from "react";
import Species from "./components/species/Species";

export default function Home() {
  const [species, setSpecies] = useState<"dog" | "cat">("dog");
  const [weight, setWeight] = useState<number>(0);
  const [dehydration, setDehydration] = useState<number>(0);
  const [losses, setLosses] = useState<number>(0);

  const [results, setResults] = useState([
    {
      shockMin: 0,
      shockMax: 0,
      maintenanceDay: 0,
      maintenanceHour: 0,
    },
  ]);

  const [resultsFluid, setResultsFluid] = useState([
    {
      fluidTherapyTotal: 0,
      fluidTherapy6: 0,
      fluidTherapy12: 0,
      fluidTherapy24: 0,
    },
  ]);

  useEffect(() => {
    if (!weight || !species) return;

    let result;
    if (species === "dog") {
      result = {
        shockMin: 15 * weight,
        shockMax: 20 * weight,
        maintenanceDay: weight > 0 ? 30 * weight + 70 : 0,
        maintenanceHour: weight > 0 ? (30 * weight + 70) / 24 : 0,
      };
    } else if (species === "cat") {
      result = {
        shockMin: 5 * weight,
        shockMax: 10 * weight,
        maintenanceDay: weight > 0 ? 30 * weight + 70 : 0,
        maintenanceHour: weight > 0 ? (30 * weight + 70) / 24 : 0,
      };
    } else {
      result = {
        shockMin: 0,
        shockMax: 0,
        maintenanceDay: 0,
        maintenanceHour: 0,
      };
      alert("Shock - defaulted");
    }

    setResults([result]);
  }, [species, weight]);

  useEffect(() => {
    if (!weight || !species || !results[0]) {
      setResultsFluid([
        {
          fluidTherapyTotal: 0,
          fluidTherapy6: 0,
          fluidTherapy12: 0,
          fluidTherapy24: 0,
        },
      ]);
      return;
    }

    const dehydrationFluid = weight * dehydration * 10;
    const dehydrationFluid6 = dehydrationFluid / 6;

    const result = {
      fluidTherapyTotal:
        results[0].maintenanceDay + dehydrationFluid + losses * 24,
      fluidTherapy6: results[0].maintenanceHour + dehydrationFluid6 + losses,
      fluidTherapy12:
        results[0].maintenanceHour + dehydrationFluid / 12 + losses,
      fluidTherapy24:
        (results[0].maintenanceDay + dehydrationFluid + losses * 24) / 24,
    };

    setResultsFluid([result]);
  }, [results, dehydration, losses, species, weight]);

  return (
    <Box sx={{ minHeight: "100vh", width: "100vw", backgroundColor: "#d1f0ff", p:2 }}>
      <Box sx={{minHeight:"30%", backgroundColor:"#ffffff", borderRadius:"16px", padding:1}}>
        <Box sx={{height:"10%", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Typography sx={{color:"#0f4d57", fontWeight:"800", fontSize:"1.4rem", mb:2}}>Patient Details</Typography>
        </Box>
      <Box sx={{ height: "20%", p:1}}>
        <Weight weight={weight} setWeight={setWeight} />
      </Box>
      <Box sx={{ height: "20%", p:1 }}>
        <Dehydration
          dehydration={dehydration}
          setDehydration={setDehydration}
        />
      </Box>
      <Box sx={{ height: "20%", p:1 }}>
        <Losses losses={losses} setLosses={setLosses} />
      </Box>
      <Box sx={{height: "20%", p:1}}
      >
        <Species species={species} setSpecies={setSpecies} />
      </Box>
      </Box>
      <Box sx={{ minHeight: "60%" }}>
        <Results results={results} resultsFluid={resultsFluid} species={species} />
      </Box>
    </Box>
  );
}
