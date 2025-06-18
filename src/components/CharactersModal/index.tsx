import { Box, CardMedia, Dialog, DialogContent, DialogTitle, Divider, IconButton, Typography } from "@mui/material";
import type { Character } from "../../types/character";
import CharacterBasicInfo from "./CharacterBasicInfo";
import { Close } from "@mui/icons-material";

interface CharacterModalProps{
    open: boolean,
    onClose: () => void,
    character: Character | null,
}

export function CharacterModal({ open, onClose, character }: CharacterModalProps) {
    if (!character) return null;

    return(
        <Dialog 
            open={open} 
            onClose={onClose} 
            maxWidth="sm" 
            fullWidth
        >
            <DialogTitle>
                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                    <Typography variant="h5" fontWeight="bold">
                        {character.name}
                    </Typography>
                    
                    <IconButton onClick={onClose}>
                        <Close />
                    </IconButton>
                </Box>
            </DialogTitle>
            <Divider/>
            <DialogContent>
                <Box sx={{display:"flex", gap: 2,}}>
                    <CardMedia
                        component="img"
                        height="400"
                        image={character.image || "../../../public/default_img.svg"}
                        alt={character.name}
                        sx={{
                            height: 400,
                            width: "50%",
                            objectFit: "cover",
                            borderRadius: 2
                        }}
                    />

                    <Box sx={{ width: "100%"}}>
                        <CharacterBasicInfo
                            character={character}
                        />
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}