import { Box, Divider, Link, Typography, css } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import BasicModal from "../components/BasicModal";
import imagenPerfil from "../imagenes/Perfil.png"
import curriculum from "../archivos/GonzaloCepedaCV.pdf";
import globalStyles from "../global-styles/globalStyles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=> ({

  seccionPerfil: {
    boxShadow: `0px 3px 5px -1px ${theme.palette.primary.light}`,
    background: `linear-gradient(180deg, ${theme.palette.primary.dark} 0%, ${theme.palette.darkMode.background} 35%)`,
  },

  tituloSeccionPerfil: {
    color: theme.palette.primary.main,
  },

  subtituloSeccionPerfil: {
    textShadow: `2px 1px 2px ${theme.palette.primary.main}`,
  },

  contenedorGeneralFormacion: {
    alignItems: "center",
  },

  imgPerfil: {
    width: "20%",
    minWidth: "200px",
    borderRadius: "50%",
    backgroundColor: theme.palette.darkMode.background,
    boxShadow: `0 .2rem .4rem .01rem ${theme.palette.primary.light}`,
  },

}))

function Perfil() {

  const classes = useStyles();
  const globalClasses = globalStyles(); 
  
  return (
    <Box
      id="perfil"
      className={`${globalClasses.seccion} ${classes.seccionPerfil}`}
    >
      <Typography
        className={`${globalClasses.tituloSeccion} ${classes.tituloSeccionPerfil}`}
        sx={{
          fontFamily: "Acme",
          fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem", lg: "2.25" }
        }}
      >
        Perfil
      </Typography>
      <Typography
        className={`${globalClasses.subtituloSeccion} ${classes.subtituloSeccionPerfil}`}
        sx={{
          fontFamily: "Acme",
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem", lg: "2" }
        }}
      >
        Sobre mí
      </Typography>
      <Box
        className={`${globalClasses.contenedorGeneral} animado`}
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <img
          className={`${classes.imgPerfil} ${classes.myClass} animacion-img`}
          src={imagenPerfil}
          alt="Gonzalo Cepeda"
        />
        <Typography>Soy Gonzalo Cepeda, Desarrollador Web Full Stack.</Typography>

        <Box
          className={`
            ${globalClasses.botonContenedor}
            ${globalClasses.spanContenedor}
          `}
        >
          <span className={globalClasses.span}></span>
          <Link
            className={globalClasses.botonElemento}
            sx={{ textDecoration: "none" }}
            href={curriculum}
            download={"CV Gonzalo Cepeda"}
          > 
            <PictureAsPdfIcon className={globalClasses.BotonIcono} />
            <Typography
              className={globalClasses.BotonTexto}
              sx={{fontFamily: "Acme"}}
            >Descargar CV</Typography>
            <DownloadIcon className={globalClasses.BotonIcono} />
          </Link>
        </Box>
      </Box>

      <Divider className={globalClasses.divider} sx={{ marginBottom: "1rem" }} />

      <Typography
        className={`${globalClasses.subtituloSeccion} ${classes.subtituloSeccionPerfil}`}
        sx={{
          fontFamily: "Acme",
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem", lg: "2" }
        }}
      >
        Formación
      </Typography>
      <Box
        className={`${globalClasses.contenedorGeneral} ${classes.contenedorGeneralFormacion}`}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <Typography sx={{width: "80%"}}> Comencé mi formación realizando trainings de manera autodidacta, y luego realicé la diplomatura en "Programación Web Full Stack" con React JS en la UTN (Universidad Tecnológica Nacional).</Typography>
        <BasicModal />
        <Typography sx={{width: "80%"}}>Actualmente continúo mi formación realizando el curso de "React - La Guía Completa" en UDEMY. </Typography>
      </Box>
    </Box>
  )
}

export default Perfil