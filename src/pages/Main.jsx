import { Box } from "@mui/material"
import Habilidades from "./Habilidades"
import Perfil from "./Perfil"
import Proyectos from "./Proyectos"

function Main() {
  return (
    <Box>
      <Perfil />
      <Proyectos />
      <Habilidades />
    </Box>
  )
}

export default Main