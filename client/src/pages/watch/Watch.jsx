import "./watch.scss"
import { ArrowBackOutlined } from '@mui/icons-material'

const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
        <video
            className="video"
            autoPlay
            progress
            controls
            src="https://live-par-2-abr.livepush.io/vod/bigbuckbunnyclip.mp4"
        />
    </div>
  )
}

export default Watch