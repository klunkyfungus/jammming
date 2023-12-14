import { Paper, Stack } from "@mui/material";
import React from "react";


function ListPlaylists({ playlistsList, handleSelectPlaylistToEdit }) {

    return (
        <Stack spacing={2}>
            {playlistsList.map((playlist, index) => (
                <Paper key={index} listid={index} onClick={handleSelectPlaylistToEdit}>
                    {playlist.name}
                </Paper>
            ))}
        </Stack>
    );
}

export default ListPlaylists;