import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import classes from "../styles/global.module.css";
import Editor from './editor';
import Preview from './preview';
import TitleBar from './titleBar';

export default function Index() {
  return (
    <Container className={`${classes.body}`}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TitleBar />
        </Grid>
        <Grid item xs={6}>
          <Editor />
        </Grid>
        <Grid item xs={6}>
           <Preview />
        </Grid>
      </Grid>
    </Container>
  );
}