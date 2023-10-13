import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from "@mui/material"
import { Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState('')

    //When we reload the page fetchFromAPI gets applied, because useEffect is called when a component is initialized. Array is necessary, [selectedCategory] is a dependency array, its going to call the fetchFromAPI function whenever the category is changed
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => { setVideos(data.items) })
    }, [selectedCategory])

    return (
        <Stack sx={{
            flexDirection: {
                sm: 'column',
                md: 'row'
            },
            // backgroundColor: 'blue' 
        }}>
            <Box sx={{
                height: {
                    sm: 'auto',
                    md: '92vh'
                },
                // backgroundColor: "pink",
                borderRight: '1px solid #3d3d3d',
                px: { sm: 0, md: 2 }
            }}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography
                    className="copyright"
                    variant="body2"
                    sx={{
                        mt: 1.5,
                        color: '#fff'
                    }}>
                    Copyright 2022 Meet Bhadeshia
                </Typography>
            </Box>

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
                    {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack >
    )
}

export default Feed