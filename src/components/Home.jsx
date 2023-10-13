import React from 'react'
import { Box, Typography } from "@mui/material"
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import logo from "./youtbe_jpg-PhotoRoom.png-PhotoRoom.png"

const Home = () => {
    return (
        <Box style={{ color: 'white', height: "100vh" }}>
            <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                    <img src={logo} width={"250px"} height={"100px"} />
                </Link>
                <Box sx={{ margin: "3.5% 0" }}>

                    <SearchBar />
                </Box>
                <Typography>
                    Youtube that doesn't distract you
                </Typography>
            </Box>
        </Box>
    )
}

export default Home