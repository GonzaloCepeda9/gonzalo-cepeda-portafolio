import Header from './pages/Header'
import Footer from './pages/Footer'
import Main from './pages/Main'
import "./index.css"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { THEME } from './shared/theme';
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

function App() {

    useEffect(()=> {
      AOS.init();
    }, [])

  const theme = createTheme(THEME);
  
  return (
    <div className="contenedor-app">
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
