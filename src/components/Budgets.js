import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from "recharts";

const budgets = [
  { category: "Entertainment", used: 130, total: 150, color: "#f44336" },
  { category: "Bills", used: 300, total: 400, color: "#2196f3" },
  { category: "Dining Out", used: 200, total: 300, color: "#ff9800" },
  { category: "Personal Care", used: 100, total: 200, color: "#4caf50" },
];

// Prepare data for Pie Chart
const pieData = [
  { name: "Entertainment", value: 130, color: "#f44336" },
  { name: "Bills", value: 300, color: "#2196f3" },
  { name: "Dining Out", value: 200, color: "#ff9800" },
  { name: "Personal Care", value: 100, color: "#4caf50" },
];

// Prepare the percentage to be displayed
const totalUsed = pieData.reduce((acc, item) => acc + item.value, 0);
const totalLimit = 975;

const Budgets = () => {
  return (
    <Card sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Budgets
        </Typography>

        <Grid container spacing={2}>
          {/* Pie Chart Section (Float Left) */}
          <Grid item xs={12} md={6}>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60} // For the inner hole to make it a donut
                  outerRadius={100} // For the thickness of the ring
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                {/* Inner Text */}
                <Label
                  value={`$${totalUsed} of $${totalLimit} limit`}
                  position="center"
                  fontSize="18px"
                  fontWeight="bold"
                  fill="#333"
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Grid>

          {/* Budget Categories Section (Float Right) */}
          <Grid item xs={12} md={6}>
            {budgets.map((budget, index) => (
              <Box
                key={index}
                mb={2}
                sx={{
                  borderLeft: `4px solid ${budget.color}`,
                  pl: 2, // Padding to separate text from border
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {budget.category}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  ${budget.used} / ${budget.total}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Budgets;
