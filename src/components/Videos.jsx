import { Stack, Box } from "@mui/material"
import { VideoCard, ChannelCard } from "./"

const Videos = ({ videos }) => {

    console.log("videos", videos)

    return (
        <Stack direction="row" flexWrap="wrap" alignItems="start" gap={2} sx={{
            // background: "red",
            justifyContent: { xs: "center", md: "start", lg: "start", xl: "center" }
        }}>
            {/* videos is returning a collection of objects, so we are using below method */}
            {Object.values(videos).map((item, index) => (
                <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )

}

export default Videos