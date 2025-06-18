import { Card, CardContent, CardMedia, Typography, Chip, Box } from "@mui/material"
import { Home as HomeIcon } from "@mui/icons-material"

interface Character {
  name: string
  house?: string
  image: string
}

interface CharacterCardProps {
  character: Character
}

const CharacterCard = ({ character }: CharacterCardProps) => {
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
        image={character.image || "/placeholder.svg?height=200&width=300"}
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

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <HomeIcon sx={{ fontSize: 18, color: "text.secondary" }} />
          <Chip
            label={character.house || "Sem casa"}
            size="small"
            variant={character.house ? "filled" : "outlined"}
            color={character.house ? "primary" : "default"}
            sx={{
              fontSize: "0.75rem",
              height: 24,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  )
}

export default CharacterCard
