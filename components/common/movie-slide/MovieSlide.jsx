import React, {useEffect, useState} from "react";
import axios from "axios";
const imageUrl = 'https://image.tmdb.org/t/p/original/';

const MovieSlide = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies();
    }, []);


    function getTrendingMovies() {
        if (props.hasPage) {
            console.log("POST Request Here")
            axios.post(`${props.request_url}`, {'page': 1,}, {headers: {"Accept": `application/json`,}})
                .then(res => {
                    setMovies(res.data.results)
                    console.log(res.data.results)
                })
        } else if (!props.hasPage) {
            axios.get(`${props.request_url}`).then(res => {
                setMovies(res.data.results);
                console.log(res.data.results);
            })
        }
    }

    return (
      <React.Fragment>
          <div className='movie_row_section'>
            <div className="d-flex flex-row align-items-center text-white" style={{marginTop: '20px'}}>
                <h2 className='movie_section_title mt-0'>{props.title}</h2>
                <a className="movie_section_more" style={{display: `${props.viewMore}`}}>More <i className="las la-angle-double-right"/></a>
            </div>

            <div className='movie-row'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`movies ${props.large && 'movie_large'}`}
                        src={`${imageUrl}${props.large ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.title} />
                ))}
            </div>

        </div>
      </React.Fragment>
  )
}

export default MovieSlide;