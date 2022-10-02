import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { API_KEY, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube';


function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState("");
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data)
            setMovies(response.data.results)
        }).catch((err) => {
            console.log('error vro')
        })
    }, [props.url])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };


    const handleMovie = async (movie) => {
        if (urlId) {
            setUrlId("")
        }
        else {
            let urlid = await axios.get(
                `/movie/${movie.id}/videos?api_key=${API_KEY}`
            )
            setUrlId(urlid.data.results[0].key);
        }
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>
                    <img onClick={() => { handleMovie(obj) }}
                        className={props.isSmall ? 'small_poster' : 'poster'}
                        alt="poster" src={`${imageUrl + obj.backdrop_path}`} />
                )}
            </div>
            {urlId &&
                <YouTube videoId={urlId} opts={opts} />
            }
        </div>
    )
}

export default RowPost

