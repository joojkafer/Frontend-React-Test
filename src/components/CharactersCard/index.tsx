import { Card, CardContent, CardMedia, Typography, Chip, Box, IconButton } from "@mui/material"
import { Logout, Visibility } from "@mui/icons-material"
import { Link } from "@tanstack/react-router"

interface Character {
  name: string
  house?: string
  image: string
}

interface CharacterCardProps {
  character: Character
  onOpenModal: () => void
}

const CharacterCard = ({ character, onOpenModal }: CharacterCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}
    >
      <CardMedia
        component="img"
        height="400"
        image={character.image || "../../../public/iced.png"}
        alt={character.name}
        sx={{
          objectFit: "cover",
        }}
      />

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 600,
            lineHeight: 1.2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {character.name}
        </Typography>

        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between" }}
        >
          <Chip
            label={character.house || "Sem casa"}
            size="small"
            sx={{
              fontSize: "0.75rem",
              height: 24,
            }}
          />
          <Box sx={{display: "flex", gap: 1}}>
            {/* Abre o modal */}
            <IconButton onClick={onOpenModal}>
              <Visibility />
            </IconButton>

            {/* Abre uma nova rota */}
            <IconButton>
              <Link to="/about">
                <Logout/>
              </Link>
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CharacterCard
