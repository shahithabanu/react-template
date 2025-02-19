import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, IconButton, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import PieChartIcon from "@mui/icons-material/PieChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MessageIcon from "@mui/icons-material/Message";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [open, setOpen] = useState(false); // State to control the drawer on mobile

  const menuItems = [
    { text: "Overview", icon: <HomeIcon /> },
    { text: "Transactions", icon: <SwapHorizIcon /> },
    { text: "Budgets", icon: <PieChartIcon /> },
    { text: "Pots", icon: <AttachMoneyIcon /> },
    { text: "Recurring Bills", icon: <MessageIcon /> },
  ];

  return (
    <>
      {/* Mobile/Tablet Menu Icon */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{
          display: { xs: "block", md: "none" }, // Only show on mobile/tablet
          position: "absolute",
          top: 20,
          left: 20,
        }}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar (Temporary Drawer for mobile/tablet) */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            bgcolor: "#1e1e1e",
            color: "#fff",
            boxSizing: "border-box",
            position: "absolute", // Ensures the drawer stays at the top
            top: 0,
            left: 0,
            bottom: 0, // Drawer stretches to the bottom on mobile
          },
        }}
        ModalProps={{
          keepMounted: true, // Improves performance on mobile
        }}
      >
        <Box sx={{ textAlign: "center", p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Finance
          </Typography>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Sidebar (Permanent for larger screens) */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" }, // Show this only on desktop (md and larger)
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            bgcolor: "#1e1e1e",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ textAlign: "center", p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Finance
          </Typography>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
