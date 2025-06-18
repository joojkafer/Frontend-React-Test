import { Box, Divider, Typography } from "@mui/material"
import type { Character } from "../../../types/character"

interface CharacterBasicInfoProps{
    character: Character | null
}

export default function CharacterBasicInfo({ character }: CharacterBasicInfoProps){
    console.log("Character infos: ", character)
    return(
        <Box>
            <Typography variant="h5" fontWeight="bold">
                Personal info
            </Typography>

            <Typography variant="body1">
                Gender: {character?.gender || "Desconhecida"}
            </Typography>
            <Typography variant="body1">
                Specie: {character?.species || "Desconhecida"}
            </Typography>
            <Typography variant="body1">
                Birth Date: {character?.dateOfBirth || "Desconhecida"}
            </Typography>

            <Divider 
                variant="middle"
                sx={{
                    borderBottomWidth: 1,
                    borderColor: "#bbb",
                    my: 2
                }}
            />

            <Typography variant="h5" fontWeight="bold">
                Witch info
            </Typography>

            <Typography variant="body1">
                Ancestry: {character?.ancestry}
            </Typography>
            <Typography variant="body1">
                House: {character?.house}
            </Typography>
            <Typography variant="body1">
                Patronus: {character?.patronus}
            </Typography>

            <Divider 
                variant="middle"
                sx={{
                    borderBottomWidth: 1,
                    borderColor: "#bbb",
                    my: 2
                }}
            />

            <Typography variant="h5" fontWeight="bold">
                Wand
            </Typography>
            <Typography variant="body1">
                Wood: {character?.wand.wood}
            </Typography>
            <Typography variant="body1">
                Core: {character?.wand.core}
            </Typography>
            <Typography variant="body1">
                Lenght: {character?.wand.length}
            </Typography>
        </Box>
    )
}