import * as React from 'react';
import { Box, Modal, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import certificadoUTN from "../imagenes/CertificadoUTN.png"
import globalStyles from '../global-styles/globalStyles';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=> ({
  
    imgCertificado: {
      width: "100%"
    }

}))

export default function BasicModal() {

  const classes = useStyles();
  const globalClasses = globalStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <Box
        className={`
          ${globalClasses.botonContenedor}
          ${globalClasses.spanContenedor}
        `}
      >
        <span className={globalClasses.span}></span>
        <Box
          onClick={handleOpen}
          className={globalClasses.botonElemento}
        >
          <Typography
            className={globalClasses.BotonTexto}
            sx={{fontFamily: "Acme"}}
          >Ver certificado</Typography>
          <VisibilityIcon sx={{fontSize: {xs: "1rem", sm: "1.2rem"}}} className={globalClasses.BotonIcono} />
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="certificado-modal"
        >
          <Box
            sx={{
              width: {xs: "90%", sm: "80%", md: 800},
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              border: '2px solid #333',
              boxShadow: 24,
              p: 4,
            }}>
            <img className={classes.imgCertificado} src={certificadoUTN} alt="" />
          </Box>
        </Modal>
      </Box>
  );
}