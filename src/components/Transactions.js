import React from "react";
import { Box,Card, CardContent, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Typography } from "@mui/material";

const Transactions = () => {
  const transactions = [
    { id: 1, name: "Emma Richardson", amount: "+$75.50", date: "19 Aug 2024", avatar: "", color: "green" },
    { id: 2, name: "Savory Bites Bistro", amount: "-$55.50", date: "19 Aug 2024", avatar: "", color: "red" },
    { id: 3, name: "Daniel Carter", amount: "-$42.30", date: "18 Aug 2024", avatar: "", color: "red" },
    { id: 4, name: "Sun Park", amount: "-$120.00", date: "17 Aug 2024", avatar: "", color: "green" },
    { id: 5, name: "Urban Service Hub", amount: "-$65.00", date: "17 Aug 2024", avatar: "", color: "red" },
  ];

  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">Transactions</Typography>
        <List>
          {transactions.map((item, index) => (
            <React.Fragment key={item.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src={item.avatar || ""} sx={{ bgcolor: item.color === "green" ? "green" : "red" }} />
                </ListItemAvatar>
                <ListItemText primary={item.name} />
                <Box textAlign="right">
                  <Typography color={item.color} fontWeight="bold">
                    {item.amount}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {item.date}
                  </Typography>
                </Box>
              </ListItem>
              {index < transactions.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};


export default Transactions;
