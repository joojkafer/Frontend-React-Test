"use client"

import { AppBar, Toolbar, Typography, TextField, InputAdornment, IconButton, Box } from "@mui/material"
import { Menu as MenuIcon, Search as SearchIcon, Dashboard as DashboardIcon } from "@mui/icons-material"
import { useState } from "react"

interface HeaderProps {
  onMenuClick: () => void
}

const Header = ({ onMenuClick }: HeaderProps) => {
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

        {/* Right side - Search Bar */}
        <TextField
          size="small"
          placeholder="Pesquisar..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.3)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(255, 255, 255, 0.5)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(255, 255, 255, 0.7)",
              },
            },
            "& .MuiInputBase-input::placeholder": {
              color: "rgba(255, 255, 255, 0.7)",
              opacity: 1,
            },
            width: { xs: 200, sm: 300 },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
              </InputAdornment>
            ),
          }}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header
