import Navbar from "./components/Navbar"
import { Outlet , useNavigate} from "react-router-dom"

function App() {
  const navigate = useNavigate() ; 
  return (
   <div>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
      <Navbar></Navbar>
      <Outlet></Outlet>
      <button onClick={() => navigate(-1)}>Volver atras</button>
   </div>
  )
}

export default App
