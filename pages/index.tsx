import Container from '@mui/material/Container';
import classes from '../styles/global.module.css';
import LayoutOutline from './editor/layoutOutline';

export default function Index() {
  //const lightTheme = createContext({});
  return (
    // <ThemeProvider theme={lightTheme}>
    <Container className={`${classes.body}`}>
      <LayoutOutline />
    </Container>
    // </ThemeProvider>
  );
}
