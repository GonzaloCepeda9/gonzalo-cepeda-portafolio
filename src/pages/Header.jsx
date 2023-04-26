import { Box }  from "@mui/material";
import fondoPC from "../imagenes/FondoGris.jpg";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=> ({

sectionHome: {
  width: "95%",
  minHeight: "100vh",
  margin: "auto",
  marginTop: "2rem",
  padding: "2rem",
  gap: "1rem",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  textAlign: "center",
  backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.5), rgba(10, 10, 10, 0.5)), url(${fondoPC})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  boxShadow: "0px 3px 5px -1px rgba(255, 255, 255, 0.2), 0px 5px 8px 0px rgba(255, 255, 255, 0.14), 0px 1px 14px 0px rgba(255, 255, 255, 0.12)",
  borderRadius: "4px",
  transition: "boxShadow: 300ms cubicBezier(0.4, 0, 0.2, 1) 0ms",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    padding: "1rem .5rem",
    marginTop: "1rem",
  }
},
    
}))

function Header() {

  const classes = useStyles();

  return (
    <Box
      className={classes.sectionHome}
      data-aos="zoom-out-right"
      data-aos-duration="1000"
    >
      <Box className={classes.boxNav}>
        <ResponsiveAppBar />
      </Box>
    </Box>
  )
}

export default Header