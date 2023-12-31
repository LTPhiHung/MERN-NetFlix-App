import React, { useEffect, useState } from 'react'
import "./featured.scss";
import { PlayArrow, InfoOutlined } from '@mui/icons-material';
import axios from 'axios';

const Featured = ({type, setGenre}) => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios(`/movies/random?type=${type}`, {
                    headers: {
                        token : 
                        "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });
                setContent(res.data[0])
            } catch(err) {
                console.log(err);
            }
        };
        getRandomContent();
    }, [type]);

    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies": "Series"}</span>
                    <select name="genre" id="genre" onChange={e => setGenre(e.target.value)}>
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
                src={content.img}
                alt=""
            />
            <div className="info">
                <img 
                    src={content.imgTitle}
                    alt="" 
                />
                <span className="desc">{content.desc}</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
