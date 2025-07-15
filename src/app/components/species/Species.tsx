import { Box, Button } from "@mui/material";
import React from "react";

interface SpeciesProps {
  species: "cat" | "dog";
  setSpecies: (species: "cat" | "dog") => void;
}

const Species: React.FC<SpeciesProps> = ({ species, setSpecies }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "60%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => setSpecies("cat")}
          sx={{
            height: "100%",
            width: "70%",
            border: "solid 1px #463ae2",
            backgroundColor: species === "cat" ? "#463ae2" : "#3dadff",
            color: "white",
            borderRadius: "16px",
          }}
        >
          Cat
        </Button>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "60%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => setSpecies("dog")}
          sx={{
            height: "100%",
            width: "70%",
            border: "solid 1px #463ae2",
            backgroundColor: species === "dog" ? "#463ae2" : "#3dadff",
            color: "white",
            borderRadius: "16px",
          }}
        >
          Dog
        </Button>
      </Box>
    </Box>
  );
};

export default Species;
