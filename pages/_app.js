// Vendors
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/vendor/icofont/icofont.min.css'
import '../assets/vendor/line-awesome-1.3.0/css/line-awesome.min.css'

// Custom
import '../assets/css/globals.css'
import '../assets/css/common.css'
import '../assets/css/home.css'

//Navbar
import '../components/common/navbar/navbar.styles.css'
//banner
import '../components/banner/banner.styles.css'
//Movie Slide
import '../components/common/movie-slide/movie-slide.styles.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
