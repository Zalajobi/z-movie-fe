import React from "react";
import Header from "../components/common/navbar/Header";
import Hero from "../components/home/Hero";
import MovieSlide from "../components/common/movie-slide/MovieSlide";
import requests from  '../helpers/request'

const index = (props) => {
  return (
      <React.Fragment>
        <main>
            <Header/>

            <Hero/>

            <MovieSlide title="Trending" hasPage={false} large={true} viewMore="none" request_url={requests.trending_day}/>
            <MovieSlide title='Action' hasPage={false} large={false} viewMore="flex" request_url={requests.genre_action}/>
            <MovieSlide title='Top Rated' hasPage={false} large={true} viewMore="flex" request_url={requests.topRated}/>
            <MovieSlide title='Comedy' hasPage={false} large={false} viewMore="flex" request_url={requests.genre_comedy}/>
            {/*<MovieSlide title='Latest Release' large={true} viewMore="flex" request_url={requests.upcomingMovie}/>*/}
        </main>
      </React.Fragment>
  )
}

export default index;