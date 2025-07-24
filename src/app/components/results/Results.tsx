import { Box, Typography } from "@mui/material";

function Results({
  results,
  resultsFluid,
  species,
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
  species: "dog" | "cat";
}) {
  // Show the first result by default
  const result = results[0];
  const resultFluid = resultsFluid[0];

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box sx={{ width: "100%", height: "50%" }}>
        <Box
          sx={{
            width: "100%",
            height: "30%",
        
          }}
        >
          <Box sx={{height:"50%", width:"100%",     display: "flex",
            justifyContent: "center",
            alignItems: "center",}}>
                <Typography sx={{ fontWeight: "800", fontSize: "1.4rem", color: "#0f4d57" }}>
            Hypovolemic shock 
          </Typography>
          </Box>
          <Box sx={{height:"50%", width:"100%",     display: "flex",
            justifyContent: "center",
            alignItems: "center",}}>
                <Typography sx={{  color: "#0f4d57" }}>
            Bolus for a <strong>{species === "cat" ? "cat" : "dog"}</strong>
          </Typography>
          </Box>
      
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
              fontWeight: "800",
              backgroundColor: "#ffffff",
              height: "60%",
              width: "80%",
              borderRadius: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#0f4d57",
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
         
          }}
        >
        <Box sx={{height:"50%", width:"100%"
          ,   display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
          <Typography sx={{color:"#0f4d57",}}>
            {species === "cat"
              ? "5-10 ml/kg"
              : "15-20 ml/kg"}
          </Typography>
        </Box>
        <Box sx={{height:"50%", width:"100%"
          ,   display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "solid 1px #0f4d57",
        }}>
          <Typography sx={{color:"#0f4d57",}}>Check perfusion after each bolus</Typography>

        </Box>
        </Box>
      </Box>

      <Box sx={{ width: "100%", height: "50%", p: 3 }}>
        <Box
          sx={{
            height: "20%",
            width: "100%",
            mb:2
         
          }}
        >
          <Box sx={{height:"100%", width:"100%", 
             display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#0f4d57",
          }}>
            <Typography sx={{ fontWeight: "800", fontSize: "1.4rem" }}>
            Fluid therapy
          </Typography>
          </Box>
       
          
           
        </Box>

        <Box sx={{ height: "20%", width: "100%", mb:2}}>


          <Box sx={{ height: "50%", width: "100%" }}>
            <Typography sx={{color:"#0f4d57"}}>Maintenance fluid</Typography>
          </Box>


          <Box sx={{ height: "50%", width: "100%", display:"flex" }}>
            <Box sx={{height:"100%", width:"50%"}}>
                  <Typography
              sx={{
                backgroundColor: "#ffffff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                height: "50%",
                fontWeight: "600",
                color:"#0f4d57",
                width:"90%",
              }}
            >
              {result.maintenanceHour !== undefined
                ? Math.round(result.maintenanceHour)
                : ""}{" "}
              ml/h
            </Typography>
            </Box>
            <Box sx={{height:"100%", width:"50%"}}>
                <Typography sx={{fontSize:"0.75rem", color:"#0f4d57"}}>(30 x kg +70) / 24 h  </Typography>
            </Box>
        
          </Box>


        </Box>

        <Box sx={{ minHeight: "20%", width: "100%", mb:2}}>


          <Box sx={{ height: "50%", width: "100%" }}>
            <Typography sx={{color:"#0f4d57"}}>
              Correct dehydration in <strong>6 hours</strong>{" "}
            </Typography>
               <Typography>
             
            </Typography>
          </Box>


          <Box sx={{ height: "50%", width: "100%", display:"flex", alignItems:"center" }}>
            <Box sx={{height:"100%", width:"50%", }}>
                 <Typography
           
              sx={{
                backgroundColor: "#ffffff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                height: "100%",
                width:"90%",
                fontWeight: "600",
                color:"#0f4d57"
              }}
            >
              {resultFluid.fluidTherapy6 !== undefined
                ? Math.round(resultFluid.fluidTherapy6)
                : ""}{" "}
              ml/h
            </Typography>
            </Box>
            <Box sx={{height:"100%", width:"50%", p:1}}>
                 <Typography
              sx={{
              
                display: "flex",
               
                alignItems: "center",
                fontSize:"0.75rem",
                color:"#0f4d57"
              }}
            >maintenance (ml/h) + (kg x dehydration % x 10)/6h + continued losses
            </Typography>
            </Box>
        
          </Box>


        </Box>

        <Box sx={{ minHeight: "20%", width: "100%", mb:2 }}>


          <Box sx={{ height: "50%", width: "100%" }}>
            <Typography sx={{color:"#0f4d57"}}>
              Correct dehydration in <strong>12 hours</strong>{" "}
            </Typography>
              
          </Box>


          <Box sx={{ height: "50%", width: "100%", display:"flex" }}>
            <Box sx={{height:"100%", width:"50%"}}>
                       <Typography
              sx={{
                width:"90%",
                backgroundColor: "#ffffff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                height: "50%",
                fontWeight: "600",
                color:"#0f4d57"
              }}
            >
              {resultFluid.fluidTherapy12 !== undefined
                ? Math.round(resultFluid.fluidTherapy12)
                : ""}{" "}
              ml/h
            </Typography>
            </Box>
            <Box sx={{height:"100%", width:"50%", p:1}}>
                 <Typography sx={{fontSize:"0.75rem", color:"#0f4d57"}}>
             maintenance (ml/h) + (kg x dehydration % x 10)/12h + continued losses
            </Typography>
            </Box>
         
          </Box>


        </Box>

        <Box sx={{ minHeight: "20%", width: "100%" }}>


          <Box sx={{ height: "50%", width: "100%" }}>
            <Typography sx={{color:"#0f4d57"}}>
              Correct dehydration in <strong>24 hours</strong>{" "}
            </Typography>
           
          </Box>


          <Box sx={{ height: "50%", width: "100%", display:"flex" }}>
            <Box sx={{width:"50%", height:"100%"}}>
                   <Typography
              sx={{
                width:"90%",
                backgroundColor: "#ffffff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                height: "50%",
                fontWeight: "600",
                color:"#0f4d57"
              }}
            >
              {resultFluid.fluidTherapy24 !== undefined
                ? Math.round(resultFluid.fluidTherapy24)
                : ""}{" "}
              ml/h
            </Typography>
            </Box>
            <Box sx={{width:"50%", height:"100%", p:1}}>
                 <Typography sx={{fontSize:"0.75rem", color:"#0f4d57"}}>
             maintenance (ml/h) + (kg x dehydration % x 10)/24h + continued losses
            </Typography>
            </Box>
          
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
