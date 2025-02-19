import React from "react";
import { Card, CardContent, Typography,display, Box, Grid,float } from "@mui/material";

const bills = [
  { title: "Paid Bills", amount: "$190.00", bgColor: "#f5f5f5" },
  { title: "Total Upcoming", amount: "$194.98", bgColor: "#f5f5f5" },
  { title: "Due Soon", amount: "$59.98", bgColor: "#f5f5f5" },
];

const RecurringBills = () => {
  return (
    <Card sx={{ p: 2, borderRadius: 2, boxShadow: 2}}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Recurring Bills
        </Typography>

        <flex container spacing={2}>
          {bills.map((bill, index) => (
            <flex item xs={12} sm={4} key={index}>
              <Box
                sx={{
                  p: 4,
                  m:2,
                  bgcolor: bill.bgColor,
                  borderRadius: 2,
                  textAlign: "center",
                  boxShadow: 1,
                  fontWeight: "bold",
                  borderLeft:"4px solid green"
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "200",float:"left",}}>
                  {bill.title}
                </Typography>
                <Typography variant="h6" sx={{float:"right"}}>
                  {bill.amount}
                </Typography>
              </Box>
            </flex>
          ))}
        </flex>
      </CardContent>
    </Card>
  );
};

export default RecurringBills;
