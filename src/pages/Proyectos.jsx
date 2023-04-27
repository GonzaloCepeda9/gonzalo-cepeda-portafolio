import Veterinaria from "../imagenes/proyectos/ProyectoVeterinaria.jpg";
import Tareas from "../imagenes/proyectos/ProyectoTareas.jpg";
import Calculadora from "../imagenes/proyectos/ProyectoCalculadora.jpg";
import ContadorClicks from "../imagenes/proyectos/ProyectoContadorClicks.jpg";
import Testimonios from "../imagenes/proyectos/ProyectoTestimonios.jpg";
import ProyectoUpTask from "../imagenes/proyectos/ProyectoUpTask.jpg";
import ProyectoMundial2022 from "../imagenes/proyectos/ProyectoMundial2022.jpg";
import { Box, Divider, Link, Typography } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import AccordionUpTask from "../components/AccordionUpTask";
import AccordionMundial from "../components/AccordionMundial";
import globalStyles from "../global-styles/globalStyles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=> ({

  seccionProyectos: {
    boxShadow: `0px 3px 5px -1px ${theme.palette.secondary.light}`,
    background: `linear-gradient(180deg, ${theme.palette.secondary.dark} 0%, rgba(0,0,0,1) 35%)`,
  },

  tituloSeccionProyectos: {
    color: theme.palette.secondary.main,
  },

  subtituloSeccionProyectos: {
    textShadow: `2px 1px 2px ${theme.palette.secondary.main}`,
  },

  contenedorGeneralProyectosBasicos: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  contenedorProyectoBasico: {
    width: "12rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    cursor: "pointer",
    transition: "all .15s ease-in",
  },

  imagenProyecto: {
    width: "100%",
    marginBottom: "8px",
    borderRadius: "5%",
    boxShadow: `0 .2rem .4rem .01rem ${theme.palette.secondary.light}`,
    opacity: "0.85",
    "&:hover": { opacity: 1 },
  },

  tituloProyecto: {
    color: "#fff",
    textShadow: `2px 2px 4px ${theme.palette.secondary.light}`,
    fontSize: "1.12rem",
  },

  contenedorGeneralProyectosAvanzados: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },

    contenedorProyectoAvanzado: {
      width: "12rem",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      cursor: "pointer",
      opacity: ".9",
      transition: "all .15s ease-in",
    },

    contenedorInfoProyecto: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      gap: "1rem",
    },

    contenedorLinks: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      gap: ".25rem",
    },

    contenedorLink: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      opacity: "0.75",
      "&:hover": {
        opacity: 1,
      }
    },

    linkText: {
      color: "#fff",
    },

    linkIcon: {
      color: theme.palette.secondary.light,
    },

}))


function Proyectos() {

  const classes = useStyles();
  const globalClasses = globalStyles();

  return (
    <Box
      id="proyectos"
      className={`${globalClasses.seccion} ${classes.seccionProyectos}`}
    >
      <Typography
        className={`${globalClasses.tituloSeccion} ${classes.tituloSeccionProyectos}`}
        sx={{
          fontFamily: "Acme",
          fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem", lg: "2.25" }
        }}
      >
        Proyectos
      </Typography>
      <Typography
        className={`${globalClasses.subtituloSeccion} ${classes.subtituloSeccionProyectos}`}
        sx={{
          fontFamily: "Acme",
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem", lg: "2" }
        }}
      >
        Proyectos básicos
      </Typography>
      <Box className={`${globalClasses.contenedorGeneral} ${classes.contenedorGeneralProyectosBasicos}`}>
        <Link
          href="https://veterinaria-gjc.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.contenedorProyectoBasico}
          sx={{ textDecoration: "none" }}
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <img className={classes.imagenProyecto} src={Veterinaria} alt="Proyecto veterinaria" />
          <Box>
            <Typography className={classes.tituloProyecto}>Veterinaria</Typography>
          </Box>
        </Link>
        <Link
          href="https://tareas-gjc.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.contenedorProyectoBasico}
          sx={{ textDecoration: "none" }}
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <img className={classes.imagenProyecto} src={Tareas} alt="Proyecto tareas" />
          <Box>
            <Typography className={classes.tituloProyecto}>Tareas</Typography>
          </Box>
        </Link>
        <Link
          href="https://calculadora-gjc.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.contenedorProyectoBasico}
          sx={{ textDecoration: "none" }}
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <img className={classes.imagenProyecto} src={Calculadora} alt="Proyecto calculadora" />
          <Box>
            <Typography className={classes.tituloProyecto}>Calculadora</Typography>
          </Box>
        </Link>
        <Link
          href="https://contadorclicks-gjc.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.contenedorProyectoBasico}
          sx={{ textDecoration: "none" }}
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <img className={classes.imagenProyecto} src={ContadorClicks} alt="Proyecto contador de clicks" />
          <Box>
            <Typography className={classes.tituloProyecto}>Contador de Clicks</Typography>
          </Box>
        </Link>
        <Link
          href="https://testimonios-gjc.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.contenedorProyectoBasico}
          sx={{ textDecoration: "none" }}
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <img className={classes.imagenProyecto} src={Testimonios} alt="Proyecto Testimonios" />
          <Box>
            <Typography className={classes.tituloProyecto}>Clon de Testimonios</Typography>
          </Box>
        </Link>
      </Box>

      <Divider className={globalClasses.divider} sx={{ marginBottom: "1rem" }} />

      <Typography className={`${globalClasses.subtituloSeccion} ${classes.subtituloSeccionProyectos}`}
        sx={{
          fontFamily: "Acme",
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem", lg: "2" }
        }}
      >Proyectos avanzados</Typography>
      <Box className={`${globalClasses.contenedorGeneral} ${classes.contenedorGeneralProyectosAvanzados}`}>
        <Box
          className={classes.contenedorProyectoAvanzado}
          data-aos="zoom-out-right"
          data-aos-duration="1000"
        >
          <img className={classes.imagenProyecto} src={ProyectoUpTask} alt="Proyecto Up-Task" />
          <Box className={classes.contenedorInfoProyecto}>
            <Typography className={classes.tituloProyecto}>UpTask</Typography>
            <Box className={classes.contenedorLinks}>
              <Link
                href="https://github.com/GonzaloCepeda9/UpTask-MERN-backend"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.contenedorLink}
                sx={{ textDecoration: "none" }}
              >
                <Typography className={classes.linkText}>Backend</Typography>
                <LinkIcon className={classes.linkIcon} />
              </Link>
              <Link
                sx={{ textDecoration: "none" }}
                href="https://github.com/GonzaloCepeda9/UpTask-MERN-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.contenedorLink}
              >
                <Typography className={classes.linkText}>Frontend</Typography>
                <LinkIcon className={classes.linkIcon} />
              </Link>
            </Box>
            <AccordionUpTask />
          </Box>
        </Box>
        <Box
          className={classes.contenedorProyectoAvanzado}
          data-aos="zoom-out-left"
          data-aos-duration="1000"
        >
          <img className={classes.imagenProyecto} src={ProyectoMundial2022} alt="Proyecto Mundial2022" />
          <Box className={classes.contenedorInfoProyecto}>
            <Typography className={classes.tituloProyecto}>Mundial 2022</Typography>
            <Box className={classes.contenedorLinks}>
              <Link
                href="https://github.com/GonzaloCepeda9/gjc-mundial2022-backend/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.contenedorLink}
                sx={{ textDecoration: "none" }}
              >
                <Typography className={classes.linkText}>Backend</Typography>
                <LinkIcon className={classes.linkIcon} />
              </Link>
              <Link
                sx={{ textDecoration: "none" }}
                href="https://github.com/GonzaloCepeda9/gjc-mundial2022-frontend/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.contenedorLink}
              >
                <Typography className={classes.linkText}>Frontend</Typography>
                <LinkIcon className={classes.linkIcon} />
              </Link>
            </Box>
            <AccordionMundial />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Proyectos