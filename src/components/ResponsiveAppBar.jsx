import { Box, List, ListItem, ListItemIcon, Link, Typography } from "@mui/material";
import { Assignment, Engineering, Person, Phone } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({

  contenedorNav: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  },

  boxTitulos: {
    width: "100%",
    textAlign: "center",
  },

  tituloPrincipal: {
    marginBottom: "1rem",
    lineHeight: 1,
    textTransform: "uppercase",
    color: "#eaeaea",
    textShadow: ".2rem .2rem .25rem #666",
  },

  subtituloPrincipal: {
    marginBottom: "1rem",
    lineHeight: 1,
    color: "#666",
    textShadow: ".05rem .05rem .1rem #eaeaea",
  },

  boxMenuList: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  boxMenuBoton: {
    alignSelf: "flex-end",
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center"
    }
  },

  menuBoton: {
    padding: ".5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: "50%",
    cursor: "pointer",
    opacity: 0.8,
    "&:hover": { opacity: 1 },
    "&:active": { opacity: 0.5 },
  },

  menuIcon: {
    color: "#e0d2ce",
  },

  list: {
    width: "100%",
  },

  linkItem: {
    backgroundColor: "#000",
    width: "98%",
    paddingRight: "1rem",
    paddingLeft: "1rem",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    textTransform: "uppercase",
    opacity: 0.75,
    borderRadius: "0 .25rem .25rem 0",
    cursor: "pointer",
    "&:hover": {
      width: "100%",
      opacity: 1,
      transition: "all .5s ease",
    },
    "&:active": { opacity: 0.6 },
    color: "#fff",
    position: "relative",
    overflow: "hidden",
    transition: "0.1s",
    "&:hover span": {
        left: "0%",
        transition: ".5s",
        borderRadius: "0 .25rem .25rem 0",
    }
  },

    linkItemPerfil: {
      boxShadow: `3px 3px 5px ${theme.palette.primary.main}`,
      "&:hover": {
        background: `linear-gradient(0deg, rgba(0,0,0,0.9565723750437675) 50%, ${theme.palette.primary.main} 100%)`,
        transition: "all .25s ease",
      },
    },

    linkItemProyectos: {
      boxShadow: `3px 3px 5px ${theme.palette.secondary.main}`,
      "&:hover": {
        background: `linear-gradient(0deg, rgba(0,0,0,0.9565723750437675) 50%, ${theme.palette.secondary.main} 100%)`,
      },
    },

    linkItemHabilidades: {
      boxShadow: `3px 3px 5px ${theme.palette.tertiary.main}`,
      "&:hover": {
        background: `linear-gradient(0deg, rgba(0,0,0,0.9565723750437675) 50%, ${theme.palette.tertiary.main} 100%)`,
      },
    },

    linkItemContacto: {
      boxShadow: `3px 3px 5px ${theme.palette.quaternary.main}`,
      "&:hover": {
        background: `linear-gradient(0deg, rgba(0,0,0,0.9565723750437675) 50%, ${theme.palette.quaternary.main} 100%)`,
      },
    },

  span: {
    position: "absolute",
    display: "block",
    top: "0",
    left: "-99%",
    width: "100%",
    height: "100%",
  },

    spanPerfil: {
      background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main})`,
    },

    spanProyectos: {
      background: `linear-gradient(90deg, transparent, ${theme.palette.secondary.main})`,
    },

    spanHabilidades: {
      background: `linear-gradient(90deg, transparent, ${theme.palette.tertiary.main})`,
    },

    spanContacto: {
      background: `linear-gradient(90deg, transparent, ${theme.palette.quaternary.main})`,
    },

  itemIcon: {
    color: "white",
  },
  
}));

function ResponsiveAppBar() {

  const classes = useStyles();

  const [width, setWidth] = useState(window.innerWidth);
  const [clicked, setClicked] = useState(false);

  const breakPoint = 768;

  useEffect(() => {
    const handleResizeWindowWidth = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindowWidth);

    return () => {
      window.removeEventListener("resize", handleResizeWindowWidth);
    };
  }, []);

  function handleClick() {
    setClicked(!clicked)
  }

  return (
    <Box className={classes.contenedorNav}>
      <Box className={classes.boxTitulos}>
        <Typography
          className={`${classes.tituloPrincipal} animacion-titulo`}
          sx={{
            fontFamily: "Acme",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem", lg: "4rem" }
          }}
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="500"
        >Gonzalo Cepeda</Typography>
        <Typography
          className={classes.subtituloPrincipal}
          sx={{
            fontFamily: "Acme",
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem", lg: "2.25" }
          }}
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="500"
        >Desarrollador Web Full Stack</Typography>
      </Box>
      <Box className={classes.boxMenuList}>
        <Box
          className={classes.boxMenuBoton}
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          {width > breakPoint ? "" : (
            <button className={classes.menuBoton} onClick={handleClick}>
              {clicked ?
                (<MenuOpenIcon fontSize="large" className={classes.menuIcon} />) :
                (<MenuIcon fontSize="large" className={classes.menuIcon} />)
              }
            </button>
          )}
        </Box>
        {clicked || width > breakPoint ? (
          <List className={classes.list}>
            <ListItem
              className={classes.listItem}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={width > breakPoint ? "1100" : ""}
            >
              <Link
                href="#perfil"
                className={`${classes.linkItem} ${classes.linkItemPerfil}`}
                sx={{ textDecoration: "none", color: "white" }}
              >
                <span className={`${classes.spanPerfil} ${classes.span}`}></span>        
                <ListItemIcon className={classes.listItemIcon}>
                  <Person className={classes.itemIcon} />
                </ListItemIcon>
                <Typography sx={{fontWeight: "bold"}}>Perfil</Typography>
              </Link>  
            </ListItem>

            <ListItem
              className={classes.listItem}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={width > breakPoint ? "1400" : "200"}
            >
              <Link
                href="#proyectos"
                className={`${classes.linkItem} ${classes.linkItemProyectos}`}
                sx={{ textDecoration: "none", color: "white" }}
              >
                <span className={`${classes.spanProyectos} ${classes.span}`}></span>        
                <ListItemIcon className={classes.listItemIcon}>
                  <Assignment className={classes.itemIcon} />
                </ListItemIcon>
                <Typography sx={{fontWeight: "bold"}}>Proyectos</Typography>
              </Link>  
            </ListItem>

            <ListItem
              className={classes.listItem}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={width > breakPoint ? "1700" : "400"}
            >
              <Link
                href="#habilidades"
                className={`${classes.linkItem} ${classes.linkItemHabilidades}`}
                sx={{ textDecoration: "none", color: "white" }}
              >
                <span className={`${classes.spanHabilidades} ${classes.span}`}></span>        
                <ListItemIcon className={classes.listItemIcon}>
                  <Engineering className={classes.itemIcon} />
                </ListItemIcon>
                <Typography sx={{fontWeight: "bold"}}>Habilidades</Typography>
              </Link>  
            </ListItem>

            <ListItem
              className={classes.listItem}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={width > breakPoint ? "2000" : "600"}
            >
              <Link
                href="#contacto"
                className={`${classes.linkItem} ${classes.linkItemContacto}`}
                sx={{ textDecoration: "none", color: "white" }}
              >
                <span className={`${classes.spanContacto} ${classes.span}`}></span>        
                <ListItemIcon className={classes.listItemIcon}>
                  <Phone className={classes.itemIcon} />
                </ListItemIcon>
                <Typography sx={{fontWeight: "bold"}}>Contacto</Typography>
              </Link>  
            </ListItem>
          </List>) : ("")
        }
      </Box>
    </Box>

  );
}
export default ResponsiveAppBar;