import { Box, Divider, Typography } from "@mui/material";
import HTML from "../imagenes/habilidades/HTML.svg";
import CSS from "../imagenes/habilidades/CSS.svg";
import JS from "../imagenes/habilidades/JS.svg";
import ReactJS from "../imagenes/habilidades/ReactJS.svg";
import NodeJS from "../imagenes/habilidades/NodeJS.svg";
import MongoDB from "../imagenes/habilidades/MongoDB.svg";
import MySQL from "../imagenes/habilidades/MySQL.svg";
import MaterialUI from "../imagenes/habilidades/MaterialUI.svg";
import TailwindCSS from "../imagenes/habilidades/TailwindCSS.svg";
import globalStyles from "../global-styles/globalStyles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=> ({

  seccionHabilidades: {
    boxShadow: `0px 3px 5px -1px ${theme.palette.tertiary.light}`,
  },

  tituloSeccionHabilidades: {
    color: theme.palette.tertiary.main,
  },

  subtituloSeccionHabilidades: {
    textShadow: `2px 1px 2px ${theme.palette.tertiary.main}`,
  },

  contenedorHabilidades: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  },

  contenedorDataBases: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  },

  contenedorHabilidad: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".75rem",
    width: "8rem",
    height: "10rem",
    boxShadow: `0 .2rem .4rem .01rem ${theme.palette.tertiary.light}`,
    borderRadius: "10%",
    "&:hover": {
      rotate: "1deg",
      backgroundColor: "#111"
    },
  },

  iconHabilidad: {
    width: "100%",
  },

  tituloHabilidad: {
    textAlign: "center",
    color: "#eaeaea",
    textShadow: "1px 1px 1px #444",
  },

}))

function Habilidades() {

  const classes = useStyles();
  const globalClasses = globalStyles();

  return (
    <Box
      id="habilidades"
      className={`${globalClasses.seccion} ${classes.seccionHabilidades}`}
    >
      <Typography className={`${globalClasses.tituloSeccion} ${classes.tituloSeccionHabilidades}`}
        sx={{
          fontFamily: "Acme",
          fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem", lg: "2.25" }
        }}
      >Habilidades</Typography>
      <Typography className={`${globalClasses.subtituloSeccion} ${classes.subtituloSeccionHabilidades}`}
        sx={{
          fontFamily: "Acme",
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem", lg: "2" }
        }}
      >Lenguajes / Librerías</Typography>
      <Box className={classes.contenedorHabilidades}>
        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          sx={{
            width: { xs: "6rem", sm: "8rem" },
            height: { xs: "8rem", sm: "10rem" }
          }}
          className={classes.contenedorHabilidad}>
          <img className={classes.iconHabilidad} src={HTML} alt="" />
          <Typography sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }} className={classes.tituloHabilidad}>HTML</Typography>
        </Box>
        <Box
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          sx={{
            width: { xs: "6rem", sm: "8rem" },
            height: { xs: "8rem", sm: "10rem" }
          }}
          className={classes.contenedorHabilidad}>
          <img className={classes.iconHabilidad} src={CSS} alt="" />
          <Typography sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }} className={classes.tituloHabilidad}>CSS</Typography>
        </Box>
        <Box
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          sx={{
            width: { xs: "6rem", sm: "8rem" },
            height: { xs: "8rem", sm: "10rem" }
          }}
          className={classes.contenedorHabilidad}>
          <img className={classes.iconHabilidad} src={JS} alt="" />
          <Typography sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }} className={classes.tituloHabilidad}>JavaScript</Typography>
        </Box>
        <Box
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          sx={{
            width: { xs: "6rem", sm: "8rem" },
            height: { xs: "8rem", sm: "10rem" }
          }}
          className={classes.contenedorHabilidad}>
          <img className={classes.iconHabilidad} src={ReactJS} alt="" />
          <Typography sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }} className={classes.tituloHabilidad}>React JS</Typography>
        </Box>
        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          sx={{
            width: { xs: "6rem", sm: "8rem" },
            height: { xs: "8rem", sm: "10rem" }
          }}
          className={classes.contenedorHabilidad}>
          <img className={classes.iconHabilidad} src={NodeJS} alt="" />
          <Typography sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }} className={classes.tituloHabilidad}>Node JS</Typography>
        </Box>
        <Box
          data-aos="flip-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          sx={{
            width: { xs: "6rem", sm: "8rem" },
            height: { xs: "8rem", sm: "10rem" }
          }}
          className={classes.contenedorHabilidad}>
          <img className={classes.iconHabilidad} src={MaterialUI} alt="" />
          <Typography sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }} className={classes.tituloHabilidad}>Material UI</Typography>
        </Box>
        <Box
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          sx={{
            width: { xs: "6rem", sm: "8rem" },
            height: { xs: "8rem", sm: "10rem" }
          }}
          className={classes.contenedorHabilidad}>
          <img className={classes.iconHabilidad} src={TailwindCSS} alt="" />
          <Typography sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }} className={classes.tituloHabilidad}>Tailwind CSS</Typography>
        </Box>
      </Box>

      <Divider className={globalClasses.divider} sx={{ marginTop: "2rem", marginBottom: "1rem" }} />

      <Typography className={`${globalClasses.subtituloSeccion} ${classes.subtituloSeccionHabilidades}`}
        sx={{
          fontFamily: "Acme",
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem", lg: "2" }
        }}
      >Bases de datos</Typography>
      <Box className={classes.contenedorGeneral}>
        <Box className={classes.contenedorDataBases}>
          <Box
            className={classes.contenedorHabilidad}
            sx={{
              width: { xs: "6rem", sm: "8rem" },
              height: { xs: "8rem", sm: "10rem" }
            }}
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img className={classes.iconHabilidad} src={MongoDB} alt="" />
            <Typography
              sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }}
              className={classes.tituloHabilidad}
            >
              Mongo DB
            </Typography>
          </Box>
          <Box
            className={classes.contenedorHabilidad}
            sx={{
              width: { xs: "6rem", sm: "8rem" },
              height: { xs: "8rem", sm: "10rem" }
            }}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img className={classes.iconHabilidad} src={MySQL} alt="" />
            <Typography
              sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }}
              className={classes.tituloHabilidad}
            >
              MySQL
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Habilidades