import { Box, Input, Typography } from "@mui/material";

interface DehydrationProps {
  dehydration: number;
  setDehydration: (value: number) => void;
}

function Dehydration({ dehydration, setDehydration }: DehydrationProps) {
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
        <Typography>Dehydration (%)</Typography>
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
          value={dehydration}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDehydration(Number(e.target.value))
          }
          placeholder="Enter dehydration percentage"
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
