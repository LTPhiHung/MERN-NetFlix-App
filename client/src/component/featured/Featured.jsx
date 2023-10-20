import React from 'react'
import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies": "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">comedy</option>
                    <option value="crime">crime</option>
                    <option value="fantasy">fantasy</option>
                    <option value="historical">historical</option>
                    <option value="horror">horror</option>
                    <option value="romance">romance</option>
                    <option value="sci-fi">sci-fi</option>
                    <option value="thriller">thriller</option>
                    <option value="western">western</option>
                    <option value="animation">animation</option>
                    <option value="drama">drama</option>
                    <option value="documentary">documentary</option>
                </select>
            </div>
        )}
       <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
        />
        <div className="info">
            <img 
                src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" 
                alt="" 
            />
            <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, soluta temporibus voluptates nihil explicabo quas facere corporis fugit minus nobis iusto dolorum nisi inventore vitae, enim repellendus vero, omnis praesentium!</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlinedIcon/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured
