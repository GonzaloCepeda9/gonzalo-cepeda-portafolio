import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, List, ListItem, ListSubheader, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=> ({

  accordion: {
    fontFamily: "Roboto",
    boxShadow: `0 0 5rem 5rem ${theme.palette.secondary.main}`,
  },

    tituloAccordion: {
      color: "#333",
    },

    iconAccordion: {
      color: theme.palette.darkMode.color,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "50%",
      boxShadow: `0 0 .1rem .05rem ${theme.palette.darkMode.background}`,
    },

      contenedorInfoProyecto: {
        textAlign: "center",
      },

        tituloInfo: {
          textTransform: "uppercase",
        },

        descripcion: {
          textAlign: "justify",
        },

        seccionInfo: {
          fontSize: "0.8rem",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          lineHeight: "1rem",
        },

          tituloLista: {
            fontStyle: "italic",
            textAlign: "center",
            textDecoration: "underline",
          },

}))

export default function AccordionMundial() {

  const classes = useStyles();

  return (
    <Box>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.iconAccordion} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.tituloAccordion}>Detalles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.contenedorInfoProyecto}>
            <Typography
              className={classes.tituloInfo}
              sx={{
                fontSize: "0.9rem",
                marginBottom: ".5rem",
              }}
            >
              Descripción:
            </Typography>
            <Typography className={classes.descripcion} sx={{fontSize: "0.8rem"}}>Este proyecto muestra el plantel y novedades sobre la selección Argentina.</Typography>
            <Typography className={classes.descripcion} sx={{fontSize: "0.8rem"}}>Fue realizado con base de datos MySQL para la carga de jugadores y novedades.</Typography>
            <Divider sx={{margin: "1.5rem .5rem"}} />
            <Typography className={classes.descripcion} sx={{fontSize: "0.8rem"}}>*** IMPORTANTE: este proyecto fue realizado con una interfaz de usuario para el frontend, y otra para el backend. Ésta fue la manera en que aprendimos durante la diplomatura, y sólo fue utilizada para ese proyecto. ***</Typography>
          </Box>

          <Divider sx={{margin: "1.5rem .5rem"}} />

          <Box className={classes.contenedorInfoProyecto}>
            <Typography className={classes.tituloInfo}
              sx={{
                fontSize: "0.9rem",
                marginTop: ".5rem",
                marginBottom: ".5rem",
              }}
            >
              Funcionalidades del proyecto:
            </Typography>

            <Box className={classes.seccionInfo}>
              <List className={classes.listaInfo}>
                <ListSubheader className={classes.tituloLista}>Variables de sesión:</ListSubheader>
                <ListItem className={classes.itemInfo}>Inicio de sesión</ListItem>
              </List>
            </Box>

            <Box className={classes.seccionInfo}>
              <List className={classes.listaInfo}>
                <ListSubheader className={classes.tituloLista}>Métodos de petición HTTP utilizados:</ListSubheader>
                <ListItem className={classes.itemInfo}>Create</ListItem>
                <ListItem className={classes.itemInfo}>Read</ListItem>
                <ListItem className={classes.itemInfo}>Update</ListItem>
                <ListItem className={classes.itemInfo}>Delete</ListItem>
              </List>
            </Box>

            <Box className={classes.seccionInfo}>
              <List className={classes.listaInfo}>
                <ListSubheader className={classes.tituloLista}>Validaciones:</ListSubheader>
                <ListItem className={classes.itemInfo}>Sólo los usuarios pueden modificar jugadores y/o novedades.</ListItem>
              </List>
            </Box>
            
            <Box className={classes.seccionInfo}>
              <List className={classes.listaInfo}>
                <ListSubheader className={classes.tituloLista}>Otras tecnologías / librerías utilizadas:</ListSubheader>
                <ListItem className={classes.itemInfo}>Handlebars (sistema de plantillas)</ListItem>
                <ListItem className={classes.itemInfo}>Cloudinary</ListItem>
                <ListItem className={classes.itemInfo}>EmailJS</ListItem>
              </List>
            </Box>
            
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}