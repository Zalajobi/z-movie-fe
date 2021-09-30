import React from "react";
// import './banner.styles.css'
const imageUrl = 'https://image.tmdb.org/t/p/original/';

const Banner = (props) => {
    return (
        <React.Fragment>
            <header className="h-100" style={{backgroundImage: `url(${imageUrl}${props.poster})`, width: '100%', height: '100%',  backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className="banner_content">
                    <h1 className='banner-title'>{props.title}</h1>
                    <p className='movie-overview'>{props.overview}</p>
                    <div className='btn-container'>
                        <button className='btn-reg'><i className="las la-play-circle"/>Play</button>
                        <a href={`/movie-info?id=${props.id}`}><button className='btn-dark'><i className="las la-info"/> More Info</button></a>
                    </div>
                </div>
            <div className="faded-gradient"/>
        </header>
        </React.Fragment>
    )
}

export default Banner;