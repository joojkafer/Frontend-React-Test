import { Box, Typography, Button, Container, Paper } from "@mui/material"
import { Home as HomeIcon, ErrorOutline as ErrorIcon } from "@mui/icons-material"
import { Link } from '@tanstack/react-router'

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          py: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 6,
            borderRadius: 3,
            width: "100%",
            maxWidth: 500,
          }}
        >
          <ErrorIcon
            sx={{
              fontSize: 80,
              color: "error.main",
              mb: 3,
            }}
          />

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "3rem", sm: "4rem" },
              fontWeight: "bold",
              color: "error.main",
              mb: 2,
            }}
          >
            404
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 500,
              color: "text.primary",
            }}
          >
            Página não encontrada
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            Oops! A página que você está procurando não existe ou foi movida.
          </Typography>

          <Button
            component={Link}
            to="/"
            variant="contained"
            size="large"
            startIcon={<HomeIcon />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontSize: "1.1rem",
            }}
          >
            Voltar para Home
          </Button>
        </Paper>
      </Box>
    </Container>
  )
}

export default NotFound
