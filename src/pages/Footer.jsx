import { Box, Link, Typography }  from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import globalStyles from "../global-styles/globalStyles";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles ((theme) => ({

  seccionFooter: {
    boxShadow: `0px 3px 5px -1px ${theme.palette.quaternary.light}`,
    background: `linear-gradient(180deg, ${theme.palette.quaternary.dark} 0%, ${theme.palette.darkMode.background} 35%)`,
    marginBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem"
    }
  },
  
  tituloSeccionContacto: {
    color: theme.palette.quaternary.main,
  },

  contenedorContactos: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },

    contenedorContacto: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },

      contenedorLink: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        cursor: "pointer",
        padding: "2rem",
        [theme.breakpoints.down("sm")]: {
          padding: "1rem",
        },
        "&:active": {opacity: 0.75},
      },

      contenedorWhatsApp: {
        "&:hover": {
          transition: "all .5s",
          backgroundColor: "#08bb32",
          boxShadow: "0 0 2rem #08bb32",
        }
      },

      contenedorLinkedIn: {
        "&:hover": {
          transition: "all .5s",
          backgroundColor: "#2a48db",
          boxShadow: "0 0 2rem #2a48db",
        }
      },

      contenedorGitHub: {
        "&:hover": {
          transition: "all .5s",
          backgroundColor: "#343438",
          boxShadow: "0 0 2rem #343438",
        }
      },

        iconContacto: {
          color: theme.palette.darkMode.color,
        },

}))

function Footer() {

  const classes = useStyles();
  const globalClasses = globalStyles();
  
  return (
    <Box
      id="contacto"
      className={`${globalClasses.seccion} ${classes.seccionFooter}`}
    >
      <Typography
        className={`${globalClasses.tituloSeccion} ${classes.tituloSeccionContacto}`}
        sx={{
          fontFamily: "Acme",
          fontSize: {xs: "1.5rem", sm: "1.75rem", md: "2rem", lg: "2.25"}
        }} 
      >Contacto</Typography>
      <Box
        className={classes.contenedorContactos}
        sx={{
          fontFamily: "Acme",
          gap: {sm: "2rem", md: "3rem", lg: "4rem"}
        }}
      >
        <Box
          className={classes.contenedorContacto}
          data-aos="zoom-out-right"
          data-aos-duration="1000"
        >
          <Link
            href="https://wa.me/5493446612790"
            target="blank"
            rel="noreferrer"
            className={`${classes.contenedorLink} ${classes.contenedorWhatsApp}`}
            >
            <WhatsAppIcon
              className={classes.iconContacto}
              sx={{fontSize: { xs: "3rem", sm: "4rem", md: "5rem" }}}
            />
          </Link>
          <Typography sx={{fontFamily: "Acme", fontSize: {xs:"0.9rem", sm: "1rem", marginTop: "1rem"}}}>WhatsApp</Typography>
        </Box>
        <Box
          className={classes.contenedorContacto}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Link
            href="https://www.linkedin.com/in/gonzalo-cepeda-b701b8250/"
            target="blank"
            rel="noreferrer"
            className={`${classes.contenedorLink} ${classes.contenedorLinkedIn}`}
            >
            <LinkedInIcon
              className={classes.iconContacto}
              sx={{fontSize: { xs: "3rem", sm: "5rem", md: "6rem" }}}
            />
          </Link>
          <Typography sx={{fontFamily: "Acme", fontSize: {xs:"0.9rem", sm: "1rem", marginTop: "1rem"}}}>LinkedIn</Typography>
        </Box>
        <Box
          className={classes.contenedorContacto}
          data-aos="zoom-out-left"
          data-aos-duration="1000"
        >
          <Link
            href="https://github.com/GonzaloCepeda9/"
            target="blank"
            rel="noreferrer"
            className={`${classes.contenedorLink} ${classes.contenedorGitHub}`}
            >
            <GitHubIcon
              className={classes.iconContacto}
              sx={{fontSize: { xs: "3rem", sm: "5rem", md: "6rem" }}}
            />
          </Link>
          <Typography sx={{fontFamily: "Acme", fontSize: {xs:"0.9rem", sm: "1rem", marginTop: "1rem"}}}>GitHub</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer;