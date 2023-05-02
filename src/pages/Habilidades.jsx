import { Box, Divider, Typography } from "@mui/material";
import CSS from "../imagenes/habilidades/CSS.svg";
import ExpressJS from "../imagenes/habilidades/ExpressJS.svg";
import Git from "../imagenes/habilidades/Git.svg";
import HTML from "../imagenes/habilidades/HTML.svg";
import JS from "../imagenes/habilidades/JS.svg";
import MaterialUI from "../imagenes/habilidades/MaterialUI.svg";
import MongoDB from "../imagenes/habilidades/MongoDB.svg";
import MySQL from "../imagenes/habilidades/MySQL.svg";
import NodeJS from "../imagenes/habilidades/NodeJS.svg";
import ReactJS from "../imagenes/habilidades/ReactJS.svg";
import TailwindCSS from "../imagenes/habilidades/TailwindCSS.svg";
import globalStyles from "../global-styles/globalStyles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({

  seccionHabilidades: {
    boxShadow: `0px 3px 5px -1px ${theme.palette.tertiary.light}`,
    background: `linear-gradient(180deg, ${theme.palette.tertiary.dark} 0%, ${theme.palette.darkMode.background} 35%)`,
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
    textTransform: "uppercase",
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
    color: theme.palette.darkMode.color,
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
      >MERN Stack</Typography>

      <Box className={classes.contenedorHabilidades}>
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
          <Typography className={classes.tituloHabilidad} sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }}>Mongo DB</Typography>
        </Box>

        <Box
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          sx={{
            width: { xs: "6rem", sm: "8rem" },
            height: { xs: "8rem", sm: "10rem" },
          }}
          className={classes.contenedorHabilidad}>
          <img style={{ filter: "invert(100%)" }} className={classes.iconHabilidad} src={ExpressJS} alt="" />
          <Typography className={classes.tituloHabilidad} sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }}>Express JS</Typography>
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
          <Typography className={classes.tituloHabilidad} sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }}>React JS</Typography>
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
          <img className={classes.iconHabilidad} src={NodeJS} alt="" />
          <Typography className={classes.tituloHabilidad} sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }}>Node JS</Typography>
        </Box>
      </Box>

      <Divider className={globalClasses.divider} sx={{ marginTop: "2rem", marginBottom: "1rem" }} />

      <Typography className={`${globalClasses.subtituloSeccion} ${classes.subtituloSeccionHabilidades}`}
        sx={{
          fontFamily: "Acme",
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem", lg: "2" }
        }}
      >Otras</Typography>
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
          <Typography className={classes.tituloHabilidad} sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }}>HTML</Typography>
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
          <img className={classes.iconHabilidad} src={CSS} alt="" />
          <Typography className={classes.tituloHabilidad} sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }}>CSS</Typography>
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
          <img className={classes.iconHabilidad} src={JS} alt="" />
          <Typography className={classes.tituloHabilidad} sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }}>JavaScript</Typography>
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
          <Typography className={classes.tituloHabilidad} sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }}>MySQL</Typography>
        </Box>
      </Box>

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
          <img className={classes.iconHabilidad} src={MaterialUI} alt="" />
          <Typography className={classes.tituloHabilidad} sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }}>Material UI</Typography>
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
          <img className={classes.iconHabilidad} src={TailwindCSS} alt="" />
          <Typography className={classes.tituloHabilidad} sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }}>Tailwind CSS</Typography>
        </Box>
      </Box>

      <Divider className={globalClasses.divider} sx={{ marginTop: "2rem", marginBottom: "1rem" }} />

      <Typography className={`${globalClasses.subtituloSeccion} ${classes.subtituloSeccionHabilidades}`}
        sx={{
          fontFamily: "Acme",
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem", lg: "2" }
        }}
      >Control de versiones</Typography>
      <Box className={classes.contenedorHabilidades}>
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
          <img className={classes.iconHabilidad} src={Git} alt="" />
          <Typography
            sx={{ fontSize: { xs: ".75rem" }, fontWeight: "bold" }}
            className={classes.tituloHabilidad}
          >
            Git
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Habilidades