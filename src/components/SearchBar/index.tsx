import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { useSearchContext } from "../../contexts/Search/SearchContext";

export function SearchBar() {
  const { searchValue, setSearchValue } = useSearchContext()

  return (
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
            <Search sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
          </InputAdornment>
        ),
      }}
    />
  );
}
