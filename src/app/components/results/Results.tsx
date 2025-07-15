import { Box, Typography } from "@mui/material";

function Results({
  results,
  resultsFluid,
}: {
  results: {
    shockMin: number;
    shockMax: number;
    maintenanceDay: number;
    maintenanceHour: number | undefined;
  }[];
  resultsFluid: {
    fluidTherapyTotal: number | undefined;
    fluidTherapy6: number | undefined;
    fluidTherapy12: number | undefined;
    fluidTherapy24: number | undefined;
  }[];
}) {
  // Show the first result by default
  const result = results[0];
  const resultFluid = resultsFluid[0];

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box sx={{ width: "100%", height: "30%" }}>
        <Box
          sx={{
            width: "100%",
            height: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "800", fontSize: "1.4rem" }}>
            Hypovolemic shock bolus dose
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "#ceeaff",
              height: "60%",
              width: "50%",
              borderRadius: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {Math.round(result.shockMin)} - {Math.round(result.shockMax)} ml in
            15 mins
          </Typography>
        </Box>
        <Box
          sx={{
            height: "20%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>Re-evaluate perfusion after bolus</Typography>
        </Box>
      </Box>

      <Box sx={{ width: "100%", height: "70%", p: 3 }}>
        <Box
          sx={{
            height: "20%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "800", fontSize: "1.4rem" }}>
            Fluid therapy
          </Typography>
        </Box>

        <Box sx={{ height: "20%", width: "100%", display: "flex" }}>
          <Box sx={{ height: "100%", width: "70%" }}>
            <Typography>Maintentance therapy </Typography>
          </Box>
          <Box sx={{ height: "100%", width: "30%" }}>
            <Typography
              sx={{
                backgroundColor: "#ceeaff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                height: "50%",
                fontWeight: "600",
              }}
            >
              {result.maintenanceHour !== undefined
                ? Math.round(result.maintenanceHour)
                : ""}{" "}
              ml/h
            </Typography>
          </Box>
        </Box>

        <Box sx={{ height: "20%", width: "100%" }}>
          <Box sx={{ height: "50%", width: "100%" }}>
            <Typography>
              Correct dehydration in <strong>6 hours</strong>{" "}
            </Typography>
          </Box>
          <Box sx={{ height: "50%", width: "100%" }}>
            <Typography
              sx={{
                backgroundColor: "#ceeaff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                height: "80%",
                width: "30%",
                fontWeight: "600",
              }}
            >
              {resultFluid.fluidTherapy6 !== undefined
                ? Math.round(resultFluid.fluidTherapy6)
                : ""}{" "}
              ml/h
            </Typography>
          </Box>
        </Box>

        <Box sx={{ height: "20%", width: "100%" }}>
          <Box sx={{ height: "50%", width: "100%" }}>
            <Typography>
              Correct dehydration in <strong>12 hours</strong>{" "}
            </Typography>
          </Box>
          <Box sx={{ height: "50%", width: "100%" }}>
            <Typography
              sx={{
                backgroundColor: "#ceeaff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                height: "80%",
                width: "30%",
                fontWeight: "600",
              }}
            >
              {resultFluid.fluidTherapy12 !== undefined
                ? Math.round(resultFluid.fluidTherapy12)
                : ""}{" "}
              ml/h
            </Typography>
          </Box>
        </Box>

        <Box sx={{ height: "20%", width: "100%" }}>
          <Box sx={{ height: "50%", width: "100%" }}>
            <Typography>
              Correct dehydration in <strong>24 hours</strong>{" "}
            </Typography>
          </Box>
          <Box sx={{ height: "50%", width: "100%" }}>
            <Typography
              sx={{
                backgroundColor: "#ceeaff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                height: "80%",
                width: "30%",
                fontWeight: "600",
              }}
            >
              {resultFluid.fluidTherapy24 !== undefined
                ? Math.round(resultFluid.fluidTherapy24)
                : ""}{" "}
              ml/h
            </Typography>
          </Box>
        </Box>

        {/* <Typography>
          Fluid therapy total:{" "}
          {resultFluid.fluidTherapyTotal !== undefined
            ? Math.round(resultFluid.fluidTherapyTotal)
            : ""}{" "}
        </Typography>

        <Typography>
          Maintenence Day Value: {Math.round(result.maintenanceDay)}{" "}
        </Typography> */}
      </Box>
    </Box>
  );
}

export default Results;
