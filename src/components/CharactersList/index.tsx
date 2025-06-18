import { Grid, Typography, Box, CircularProgress, Alert } from "@mui/material";
import { useGetCharacters } from "../../hooks/useGetCharacters";
import CharacterCard from "../CharactersCard";
import { CharacterModal } from "../CharactersModal";
import { useMemo, useState } from "react";
import type { Character } from "../../types/character";
import { Pagination } from "../Pagination";

export function CharacterList() {
  const { data = [], isLoading, error } = useGetCharacters();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(Number.parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const paginatedData = useMemo(() => {
    return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  }, [data, page, rowsPerPage])

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 200,
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        Erro ao carregar personagens. Tente novamente mais tarde.
      </Alert>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Alert severity="info" sx={{ mt: 2 }}>
        Nenhum personagem encontrado.
      </Alert>
    );
  }

  console.log("Data Characters Lenght: ", data.length)

  return (
    <Box sx={{ py: 3 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 4,
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        Personagens
      </Typography>

      <Grid container spacing={3}>
        {paginatedData.map((character) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={character.name}>
            <Box
              onClick={() => setSelectedCharacter(character)}
              style={{ cursor: "pointer" }}
            >
              <CharacterCard character={character} />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={data.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 50, 100]}
        showFirstButton={true}
        showLastButton={true}
      />

      <CharacterModal
        open={!!selectedCharacter}
        character={selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />
    </Box>
  );
}
