import { Box, Input, Typography } from "@mui/material";

interface LossesProps {
  losses: number;
  setLosses: (value: number) => void;
}

function Losses({ losses, setLosses }: LossesProps) {
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
        <Typography>Cont. losses (ml/h)</Typography>
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
          value={losses}
          onChange={(e) => setLosses(Number(e.target.value))}
          placeholder="Enter losses"
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

export default Losses;
