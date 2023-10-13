import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'
import { CheckCircle } from "@mui/icons-material"

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    const videoWholeDate = snippet?.publishTime
    let timeMessage
    const timeLeft = () => {
        // first check if in the previous year, for that

        const currentYear = new Date().getFullYear()
        const videoYear = new Date(videoWholeDate).getFullYear()
        const calculatedYear = currentYear - videoYear

        const currentMonth = new Date().getMonth() + 1
        const videoMonth = new Date(videoWholeDate).getMonth() + 1
        const calculatedMonth = currentMonth - videoMonth

        const currentDay = new Date().getDate()
        const videoDay = new Date(videoWholeDate).getDate()
        const calculatedDay = currentDay - videoDay

        const currentHour = new Date().getHours() + 1
        const videoHour = new Date(videoWholeDate).getHours() + 1
        const calculatedHour = currentHour - videoHour

        const currentMinutes = new Date().getMinutes() + 1
        const videoMinutes = new Date(videoWholeDate).getMinutes() + 1
        const calculatedMinutes = currentMinutes - videoMinutes
        if (calculatedYear !== 0) {
            timeMessage = calculatedYear === 1 ? "1 year ago" : calculatedYear + " years ago"
        } else if (calculatedMonth !== 0) {
            timeMessage = calculatedMonth === 1 ? "1 month ago" : calculatedMonth + " months ago"
        } else if (calculatedDay !== 0) {
            console.log("currentDay: " + currentDay, "videoDay: " + videoDay)
            timeMessage = calculatedDay === 1 ? "1 day ago" : calculatedDay + " days ago"
        } else if (calculatedHour !== 0) {
            timeMessage = calculatedHour === 1 ? "1 hour ago" : calculatedHour + " hours ago"
        } else if (calculatedMinutes !== 0) {
            timeMessage = calculatedMinutes === 1 ? "1 minute ago" : calculatedMinutes + " minutes ago"
        } else {
            timeMessage = "just posted"
        }
    }

    timeLeft()



    return (
        <Card sx={{ width: { md: '23.5vw', sm: '100%' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{ width: "100%", height: 180 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}}` : demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color="gray">
                        {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                    {timeMessage || demoChannelTitle}
                </Typography>
                {/* <Typography variant="subtitle2" fontWeight="bold" color="gray">
                        {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
                    </Typography> */}
            </CardContent>
        </Card >
    )
}

export default VideoCard