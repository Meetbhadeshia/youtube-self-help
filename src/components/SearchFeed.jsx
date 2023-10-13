import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from "@mui/material"
import { Navbar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const SearchFeed = () => {
    const [videos, setVideos] = useState('')
    const { searchTerm } = useParams()

    //When we reload the page fetchFromAPI gets applied, because useEffect is called when a component is initialized. Array is necessary, [selectedCategory] is a dependency array, its going to call the fetchFromAPI function whenever the category is changed
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => { setVideos(data.items) })
    }, [searchTerm])

    return (
        <>
            <Navbar />
            <Box
                p={2}
                sx={{
                    overflowY: 'auto',
                    // backgroundColor: 'blue',
                    height: '90vh',
                    flex: 2
                }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ color: "white" }}
                    mb={2}
                >
                    Search Results for <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
                </Typography>
                <Videos videos={videos} />
            </Box>
        </>
    )
}

export default SearchFeed