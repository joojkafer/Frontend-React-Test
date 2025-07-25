"use client"

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Box,
} from "@mui/material"
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Analytics as AnalyticsIcon,
  Help as HelpIcon,
} from "@mui/icons-material"
import { useState } from "react"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const drawerWidth = 280

const menuItems = [
  { text: "All", icon: <HomeIcon />, path: "/" },
  { text: "Gryffindor", icon: <PersonIcon />, path: "/gryffindor" },
  { text: "Slytherin", icon: <AnalyticsIcon />, path: "/slytherin" },
  { text: "Ravenclaw", icon: <SettingsIcon />, path: "/ravenclaw" },
  { text: "Hufflepuff", icon: <HelpIcon />, path: "/hufflepuff" },
]

export function Sidebar ({ open, onClose }: SidebarProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index)
    // Aqui você pode adicionar navegação
    console.log(`Navegando para: ${menuItems[index].path}`)
  }

  const drawer = (
    <Box sx={{ height: "100%" }}>
      <Toolbar />
      <Divider />
      <List sx={{ pt: 2 }}>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
              sx={{
                mx: 2,
                borderRadius: 2,
                "&.Mui-selected": {
                  backgroundColor: "primary.main",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                  "& .MuiListItemIcon-root": {
                    color: "white",
                  },
                },
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: selectedIndex === index ? "white" : "action.active",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: selectedIndex === index ? 600 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile
      }}
      sx={{
        display: { xs: "block", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          backgroundColor: "background.paper",
        },
      }}
    >
      {drawer}
    </Drawer>
  )
}

export default Sidebar
