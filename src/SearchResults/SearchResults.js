import React from "react";
import { Button, Card, List, ListItem, Typography, styled } from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export const TrackItem = styled(Card)(({ theme }) => ({

}));


function SearchResults({ searchResults, handleTrackAdd }) {

    return (
        <List>
            {searchResults.map((track, index) => (
                <ListItem key={track.name + track.id} listid={index}>
                    <Button onClick={handleTrackAdd} listid={index}>
                        <AddCircleOutlineOutlinedIcon listid={index}/>
                    </Button>  
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
                </ListItem>
            ))}
        </List>
        
    );
}

export default SearchResults;