import { useContext } from "react"
import ModalLogin from "../../components/modalLogin/ModalLogin";
import MovieCard from "../../components/movieCard/MovieCard";
import { MovieContext } from "../../context/MovieContext"
import "./Home.css"



const Home = () => {
  const {movie} = useContext(MovieContext)
  return (
    <div>
      <ModalLogin/>
       <MovieCard/>
    </div>
  )
}

export default Home