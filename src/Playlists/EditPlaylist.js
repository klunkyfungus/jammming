import { Button, List, ListItem, TextField, Typography } from "@mui/material";
import React from "react";
import { TrackItem } from "../SearchResults/SearchResults";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SaveIcon from '@mui/icons-material/Save';


function EditPlaylist({ selectedPlaylist, handleSelectedPlaylistClose, handleTrackRemove, handlePlaylistTitleEdit, handleSavePlaylistEdits }) {


    return (
        <List>
            <ListItem>
                <TextField label="Playlist Name" value={selectedPlaylist.name} onChange={handlePlaylistTitleEdit}/>
                {selectedPlaylist.name === '' ? null : (
                    <>
                        <Button>
                            <SaveIcon onClick={handleSavePlaylistEdits}/>
                        </Button>
                        <Button onClick={handleSelectedPlaylistClose}> 
                            <HighlightOffIcon/>
                        </Button>
                    </>)}
                    
            </ListItem>
            {selectedPlaylist.trackList.map((track, index) => (
                <ListItem key={track.name + track.id} listid={index}>
                    <TrackItem>
                        <Typography>
                            {track.name}
                        </Typography>
                        <Typography>
                            Artist: {track.artist}
                        </Typography>
                        <Typography>
                            Album: {track.album}
                        </Typography>
                    </TrackItem>
                    <Button listid={index} onClick={handleTrackRemove}>
                        <RemoveCircleOutlineIcon listid={index}/>
                    </Button>
                </ListItem>
            ))}
        </List>
    )
}

export default EditPlaylist;