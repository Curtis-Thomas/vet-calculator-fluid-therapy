import { Box, Input, Typography } from "@mui/material";

interface DehydrationProps {
  dehydration: number;
  setDehydration: (value: number) => void;
}

function Dehydration({ dehydration, setDehydration }: DehydrationProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value === '' ? 0 : Number(value);
    setDehydration(numericValue);
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
        <Typography sx={{fontWeight:"800", color:"#0f4d57"}}>Dehydration (%)</Typography>
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
          value={dehydration === 0 ? '' : dehydration}
          onChange={handleChange}
          placeholder="Enter dehydration %"
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

export default Dehydration;
