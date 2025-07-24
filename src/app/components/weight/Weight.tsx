import { Box, Input, Typography } from "@mui/material";

interface WeightProps {
  weight: number;
  setWeight: (weight: number) => void;
}

function Weight({ weight, setWeight }: WeightProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value === '' ? 0 : Number(value);
    setWeight(numericValue);
  };

  return (
    <Box sx={{ height: "100%", width: "100%", display: "flex", justifyContent:"space-between" }}>
      <Box
        sx={{
          height: "100%",
          width: "50%",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <Typography sx={{fontWeight:"800", color:"#0f4d57"}}>Weight (KG)</Typography>
      </Box>
      <Box
        sx={{
          height: "100%",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          type="number"
          value={weight === 0 ? '' : weight}
          onChange={handleChange}
          placeholder="Enter weight"
          disableUnderline
          sx={{
            width: "80%",
            height: "50%",
            backgroundColor: "#ffecbd",
            borderRadius: "16px",
            pl: 1,
          }}
        />
      </Box>
    </Box>
  );
}

export default Weight;
