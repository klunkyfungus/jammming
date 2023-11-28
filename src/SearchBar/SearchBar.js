import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ searchValue, handleSearchValueChange }) {

    return (
        <TextField 
            placeholder="Search..." 
            onChange={handleSearchValueChange}
            value={searchValue}
            InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
            }}
        />
    )
}

export default SearchBar;