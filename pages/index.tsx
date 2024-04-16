import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import classes from "../styles/global.module.css";
import Editor from './editor';

export default function Index() {
  return (
    <Container className={`${classes.body}`}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Editor />
        </Grid>
        <Grid item xs={6}>
          <Typography align="center" variant="h3" component="h2">
           Preview
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}