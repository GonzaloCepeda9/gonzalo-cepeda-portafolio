import { makeStyles } from "@mui/styles";

const globalStyles = makeStyles ((theme) => ({

  seccion: {
    width: "95%",
    margin: "auto",
    marginTop: "3rem",
    padding: "2rem",
    gap: "1rem",
    fontSize: "1.1rem",
    display: "flex",
    flexDirection: "column",
    color: "#eaeaea",
    boxShadow: "0px 3px 5px -1px rgba(255, 255, 255, 0.2), 0px 5px 8px 0px rgba(255, 255, 255, 0.14), 0px 1px 14px 0px rgba(255, 255, 255, 0.12)",
    borderRadius: "4px",
    transition: "boxShadow: 300ms cubicBezier(0.4, 0, 0.2, 1) 0ms",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem .5rem",
      marginTop: "1rem",
    },
  },

    tituloSeccion: {
      width: "100%",
      textAlign: "center",
      textTransform: "uppercase",
      textShadow: `0.05rem 0.05rem 0.1rem ${theme.palette.darkMode.color}`,
    },

    subtituloSeccion: {
      textAlign: "center",
    },

    contenedorGeneral: {
      width: "100%",
      margin: "auto",
      padding: "0 2rem 2rem 2rem",
      gap: "2rem",
      lineHeight: "2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "justify",
    },

    divider: {
      width: "90%",
      alignSelf: "center",
      opacity: "0.5",
      backgroundColor: "#555",
      [theme.breakpoints.down("sm")]: {
        width: "80%"
      }
    },


    // Botón general

    botonContenedor: {
      padding: "0 1rem",
      borderRadius: "1rem",
      border: "none",
      boxShadow: `0 .0125rem .075rem .025rem ${theme.palette.primary.light}`,
      opacity: "0.8",
      userSelect: "none",
      "&:hover": { opacity: 1 },
      "&:active": { opacity: 0.7 },
    },

      botonElemento: {
        position: "relative",
        zIndex: "10",
        height: "2rem",
        gap: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontWeight: "bold",
      },

        BotonTexto: {
          color: theme.palette.darkMode.color,
          textTransform: "uppercase",
        },

        BotonIcono: {
          color: theme.palette.primary.light,
          fontSize: "1.2rem",
        },

        spanContenedor: {
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          "&:hover span": {
            top: "0",
            transition: "0.25s",
          }
        },
      
        span: {
          position: "absolute",
          display: "block",
          top: "-100%",
          left: "0",
          width: "100%",
          height: "100%",
          borderRadius: "1rem",
          background: `linear-gradient(0deg, transparent, ${theme.palette.primary.main})`,
        }
}));

export default globalStyles;