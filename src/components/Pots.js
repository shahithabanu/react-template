import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const pots = [
  { name: "Savings", amount: "$159" },
  { name: "Concert Ticket", amount: "$110" },
  { name: "Gift", amount: "$40" },
  { name: "New Laptop", amount: "$10" },
];

const Pots = ({ totalSaved = "$850" }) => {
  return (
    <Card sx={{ maxWidth: 500, mx: "auto" }}>
      <CardContent>
        {/* Title */}
        <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
          Pots
        </Typography>

        {/* Container for both sections (Total Saved and Pots) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on tablet
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" }, // Align to start on tablets
            width: "100%",
          }}
        >
          {/* Left Section - Total Saved */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: { xs: "100%", md: "45%" },
              mb: { xs: 2, md: 0 },
              textAlign: { xs: "center", md: "left" }, // Center text on mobile, left on tablet
              order: { md: 1 }, // Make sure Total Saved comes first on tablet
              bgcolor: "#f5f5f5", // Background color for the left section
              padding: 2, // Padding for some space inside the section
            }}
          >
            <Typography variant="h4" sx={{ mr: 2 }}>
              $
            </Typography>
            <Box>
              <Typography variant="subtitle1">Total Saved</Typography>
              <Typography variant="h4">{totalSaved}</Typography>
            </Box>
          </Box>

          {/* Right Section - Pots */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              order: { md: 2 }, // Pots section comes second on tablet
            }}
          >
            {/* Left Column (Savings & Concert) */}
            <Box sx={{ width: { xs: "100%", md: "48%" }, mb: 2 }}>
              <Box sx={{ borderLeft: "2px solid #ccc", pl: 1, mb: 2 }}>
                <Typography variant="body1" fontWeight="bold">{pots[0].name}</Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>{pots[0].amount}</Typography>
              </Box>
              <Box sx={{ borderLeft: "2px solid #ccc", pl: 1, mb: 2 }}>
                <Typography variant="body1" fontWeight="bold">{pots[1].name}</Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>{pots[1].amount}</Typography>
              </Box>
            </Box>

            {/* Right Column (Gift & New Laptop) */}
            <Box sx={{ width: { xs: "100%", md: "48%" }, mb: 2 }}>
              <Box sx={{ borderLeft: "2px solid #ccc", pl: 1, mb: 2 }}>
                <Typography variant="body1" fontWeight="bold">{pots[2].name}</Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>{pots[2].amount}</Typography>
              </Box>
              <Box sx={{ borderLeft: "2px solid #ccc", pl: 1 }}>
                <Typography variant="body1" fontWeight="bold">{pots[3].name}</Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>{pots[3].amount}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Pots;
