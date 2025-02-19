import React from "react";
import { Box, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import BalanceCard from "../components/BalanceCard";
import Transactions from "../components/Transactions";
import Pots from "../components/Pots";
import Budgets from "../components/Budgets";
import RecurringBills from "../components/RecurringBills";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      {/* Sidebar */}
      <Sidebar />
      
      <Box sx={{ backgroundColor: "#f5f5f5", flexGrow: 1, p: 2 }}>
        <Grid container spacing={2}>
          {/* Balance Cards */}
          <Grid item xs={12} sm={4} md={4}>
            <BalanceCard title="Current Balance" amount="$4,836.00" bgColor="#1e1e1e" textColor="#fff" />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <BalanceCard title="Income" amount="$3,814.25" />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <BalanceCard title="Expenses" amount="$1,700.50" />
          </Grid>

          {/* Pots (Savings) */}
          <Grid item xs={12} sm={13} md={6}>
            <Pots totalSaved="$850" />
                    </Grid>
          {/* Transactions */}
          
          
          {/* Budgets */}
          <Grid item xs={12} md={6}>
            <Budgets />
          </Grid>
         
          <Grid item xs={12} md={6}>
            <Transactions />
          </Grid>
          

          {/* Recurring Bills */}
          <Grid item xs={12} md={6}>
            <RecurringBills />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
