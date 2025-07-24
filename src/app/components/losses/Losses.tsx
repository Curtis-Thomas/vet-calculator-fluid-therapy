import { Box, Input, Typography } from "@mui/material";

interface LossesProps {
  losses: number;
  setLosses: (value: number) => void;
}

function Losses({ losses, setLosses }: LossesProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value === '' ? 0 : Number(value);
    setLosses(numericValue);
  };

  return (
    <Box sx={{ height: "100%", width: "100%", display: "flex" }}>
      <Box
        sx={{
          height: "100%",
          width: "50%",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <Typography sx={{fontWeight:"800", color:"#0f4d57"}}>Cont. losses (ml/h)</Typography>
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
          value={losses === 0 ? '' : losses}
          onChange={handleChange}
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
