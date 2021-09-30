export const API_KEY = '0d8ab69ab9723693ba323f30f9e762e0';

const requests = {
    trending_day: `http://localhost:8000/api/z-movie/v1/trending/day`,
    trending_week: `http://localhost:8000/api/z-movie/v1/trending/week`,
    topRated: `http://localhost:8000/api/z-movie/v1/trending/week`,
    genre_action: `http://localhost:8000/api/z-movie/v1/genre/action`,
    genre_comedy: `http://localhost:8000/api/z-movie/v1/genre/comedy`,
    upcomingMovie: `http://localhost:8000/api/z-movie/v1/upcoming`,
    latestRelease: `http://localhost:8000/api/z-movie/v1/latest-movie`,
}

export default requests;