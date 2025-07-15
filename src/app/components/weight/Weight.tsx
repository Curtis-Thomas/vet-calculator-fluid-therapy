import { Box, Input, Typography } from "@mui/material";

interface WeightProps {
  weight: number;
  setWeight: (weight: number) => void;
}

function Weight({ weight, setWeight }: WeightProps) {
  return (
    <Box sx={{ height: "100%", width: "100%", display: "flex" }}>
      <Box
        sx={{
          height: "100%",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Weight (KG)</Typography>
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
          value={weight}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setWeight(Number(e.target.value))
          }
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
