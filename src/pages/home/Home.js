import { useContext } from "react"
import ModalLogin from "../../components/modalLogin/ModalLogin"
import { MovieContext } from "../../context/movieContext"
import "./Home.css"



const Home = () => {
  const {movie} = useContext(MovieContext)
  return (
    <div>Home
      <ModalLogin/>
    </div>
  )
}

export default Home