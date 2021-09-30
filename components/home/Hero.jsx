import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Carousel, Container, Image} from "react-bootstrap";
import CarouselItem from "./CarouselItem";
import Banner from "../banner/Banner";

const Hero = (props) => {

    const [trendingMovie, setTrendingMovie] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    function getTrendingMovies() {
        axios.get('http://localhost:8000/api/z-movie/v1/trending/day').then(res => {
            setTrendingMovie(res.data.results)
            setIsLoaded(false)
            // console.log("HELLO")
        })
    }

    useEffect(() => {
        getTrendingMovies()
    }, []);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

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

    return (
        <React.Fragment>

            <section id="hero" className="hero">

                <Banner overview={trendingMovie[0].overview}
                        rating={trendingMovie[0].vote_average}
                        title={trendingMovie[0].name || trendingMovie[0].title}
                        poster={trendingMovie[0].backdrop_path}
                        id={trendingMovie[0].id}/>

                {/*<div className="pic-ctn">*/}

                {/*    {trendingMovie.slice(0, 5).map(res =>*/}
                {/*        // eslint-disable-next-line react/jsx-key*/}
                {/*        <CarouselItem*/}
                {/*            overview={res.overview}*/}
                {/*            rating={res.vote_average}*/}
                {/*            title={res.name || res.title}*/}
                {/*            type={res.media_type}*/}
                {/*            poster={res.poster_path}*/}
                {/*            id={res.id}/>*/}
                {/*    )}*/}
                {/*</div>*/}
            </section>
        </React.Fragment>
    )
}

export default Hero;