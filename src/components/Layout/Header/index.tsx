"use client"

import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material"
import { Menu as MenuIcon, Dashboard as DashboardIcon } from "@mui/icons-material"
import { useState } from "react"
import { SearchBar } from "../../SearchBar"

interface HeaderProps {
  onMenuClick: () => void
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  const [searchValue, setSearchValue] = useState("")

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "primary.main",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left side - Menu Icon and Title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton color="inherit" aria-label="open drawer" onClick={onMenuClick} edge="start">
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DashboardIcon />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontWeight: 600,
                display: { xs: "none", sm: "block" },
              }}
            >
              Dashboard
            </Typography>
          </Box>
        </Box>

        <SearchBar 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Toolbar>
    </AppBar>
  )
}
