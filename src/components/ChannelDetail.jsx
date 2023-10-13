import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Videos, ChannelCard } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const ChannelDetail = () => {
    const [ChannelDetail, setChannelDetail] = useState(null)
    // changed below variable name to Videos1 from Videos, because it was conflicting with the component name Videos above
    const [videos, setVideos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]))
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data?.items))
    }, [id])

    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    background: 'linear-gradient(90deg, rgba(224,67,232,1) 0%, rgba(48,226,176,1) 100%)',
                    zIndex: 10,
                    height: '300px'
                }} />
                <ChannelCard channelDetail={ChannelDetail} marginTop="-110px" />
            </Box>
            <Box display="flex" p="2">
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    )
}

export default ChannelDetail