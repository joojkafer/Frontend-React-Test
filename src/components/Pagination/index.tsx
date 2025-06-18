import { Box, Paper, TablePagination } from "@mui/material";

interface PaginatioProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowsPerPageOptions?: number[];
  showFirstButton?: boolean;
  showLastButton?: boolean;
  className?: string;
}

export function Pagination({
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  rowsPerPageOptions = [10, 20, 50],
  showFirstButton = true,
  showLastButton = true,
  className,
}: PaginatioProps) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-end", mt: 3, mb: 2 }}
      className={className}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          border: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <TablePagination
          component="div"
          count={count}
          page={page}
          onPageChange={onPageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={onRowsPerPageChange}
          rowsPerPageOptions={rowsPerPageOptions}
          labelRowsPerPage="Itens por página:"
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} de ${count}`
          }
          showFirstButton={showFirstButton}
          showLastButton={showLastButton}
        />
      </Paper>
    </Box>
  );
}
