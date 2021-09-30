import React, {useEffect, useState} from "react";
import {Image} from "react-bootstrap";
import axios from "axios";
import randomColor from 'randomcolor'

const CarouselItem = (props) => {

    const [isLoaded, setIsLoaded] = useState(true);
    const [genre, setGenre] = useState([]);
    const [genreAvailable, setGenreAvailable] = useState(false);
    const [movieInfo, setMovieInfo] = useState();
    const [runtimeHour, setRuntimeHour] = useState(0);
    const [runtimeMinute, setRuntimeMinute] = useState(0);

    function getMovieInfo() {
        let formData = new FormData();
        formData.append("movieId", props.id);

        // fetch(
        //     "http://localhost:8000/api/v1/getItemInfo", {method: "POST", headers: {Accept: "application/json",}, body: formData,})
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.error('error');
        //     });

        axios.post("http://localhost:8000/api/z-movie/v1/getItemInfo", {'movieId': props.id,}, {headers: {"Accept": `application/json`,}})
            .then(res => {
                setIsLoaded(false)
                setMovieInfo(res.data)
                setGenre(res.data.genres)
                if (res.data.status_message != undefined || res.data.status_message != null)
                    setGenreAvailable(true)
            })
    }

    function setMovieRuntime(movieRuntime) {
        setRuntimeHour(Math.floor(movieRuntime / 60))
        setRuntimeMinute(movieRuntime % 60)
    }

    useEffect(() => {
        getMovieInfo()
    }, []);


    if (isLoaded)
        return (
            <React.Fragment>
                <div className="lds-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </React.Fragment>
        )

    function getMovieDetail(id) {
        return undefined;
    }

    return (
        <React.Fragment>
            <div className="custom-carousel pic">
                <div className="custom-carousel-item">
                    <Image src={`https://image.tmdb.org/t/p/original/`+ props.poster}
                           className="w-100 h-100"
                           alt={props.title}/>
                </div>

                <div className="movie-detail">
                    <h1>{props.title}</h1>
                    <p>{movieInfo.tagline}</p>
                    {/*<p>{props.overview}</p>*/}

                    <div className="d-flex flex-row">

                    </div>
                    {/*<div className="d-flex flex-column" available={genreAvailable}>*/}
                    {/*    {Array.isArray(genre) && genre.length > 0 && genre.map(function(d, idx){*/}
                    {/*        return (<div className="d-flex flex-column flex-lg-row flex-lg-row">*/}
                    {/*            <a className="genre-item mx-2" onClick={() => getMovieDetail(movieInfo)} style={{backgroundColor: randomColor()}} key={idx}>{d.name}</a>*/}
                    {/*        </div>)*/}
                    {/*    })}*/}
                    {/*</div>*/}


                </div>
            </div>
        </React.Fragment>
    )
}

export default CarouselItem