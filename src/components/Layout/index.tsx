"use client"

import type React from "react"

import { useState } from "react"
import { Box, CssBaseline } from "@mui/material"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Header onMenuClick={handleDrawerToggle} />

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // Account for AppBar height
          minHeight: "100vh",
          backgroundColor: "background.default",
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout
