import React, {useEffect, useState} from "react";
import axios from "axios";
import {Box, Container, Typography, Backdrop, Fade} from "@mui/material";
import {Image, Modal} from "react-bootstrap";
import Banner from "../../banner/Banner";
const imageUrl = 'https://image.tmdb.org/t/p/original/';

const MovieSlide = (props) => {
    const [movies, setMovies] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [movieName, setMovieName] = useState("");
    const [movieOverview, setMovieOverview] = useState("");
    const [movieVoteAveg, setMovieVoteAveg] = useState("");
    const [moviePoster, setMoviePoster] = useState("");
    const [movieId, setMovieId] = useState(0);
    const handleClose = () => setOpen(false);

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

    function handleOpen(movie) {
        console.log(movie)
        setOpen(true);
        setMovieName(movie.name || movie.title);
        setMovieOverview(movie.overview);
        setMovieVoteAveg(movie.vote_average)
        setMoviePoster(props.large ? movie.poster_path : movie.backdrop_path)
        setMovieId(movie.id)
    }

    return (
      <React.Fragment>
          <div className='movie_row_section'>
            <div className="d-flex flex-row align-items-center text-white" style={{marginTop: '20px'}}>
                <h2 className='movie_section_title mt-0'>{props.title}</h2>
                <a className="movie_section_more" style={{display: `${props.viewMore}`}}>More <i className="las la-angle-double-right"/></a>
            </div>

            <div className="movie-row">
                {movies.map(movie => (
                        <img
                        key={movie.id}
                        className={`movies ${props.large && 'movie_large'}`}
                        src={`${imageUrl}${props.large ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.title}
                        onClick={() => handleOpen(movie)}
                        data-toggle="modal" data-target="#exampleModal"/>
                ))}
            </div>

              <Modal className="movies-slide-modal" size="xl" scrollable={true} show={open} onHide={() => setOpen(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
                  <Modal.Body>
                      <Banner overview={movieOverview}
                              rating={movieVoteAveg}
                              title={movieName}
                              poster={moviePoster}
                              id={movieId}/>
                  </Modal.Body>
              </Modal>

              {/*<MovieModalPopUp title={movieName} overview={movieOverview} show={open}/>*/}
              {/*<Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500,}}>*/}
              {/*    <Fade in={open}>*/}
              {/*        <Box className="movies-slide-modal">*/}
              {/*            <h1>{movieName}</h1>*/}
              {/*            <h1>{movieOverview}</h1>*/}
              {/*            <h1>HELLO WORLD</h1>*/}
              {/*        </Box>*/}
              {/*    </Fade>*/}
              {/*</Modal>*/}
        </div>
      </React.Fragment>
  )
}

export default MovieSlide;