import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const BalanceCard = ({ title, amount, bgColor = "#fff", textColor = "#000" }) => {
  return (
    <Card sx={{ bgcolor: bgColor, color: textColor, p: 2 }}>
      <CardContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="h4">{amount}</Typography>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
