import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid, Stack } from '@mui/material';
import classes from "../styles/global.module.css";

export default function Index() {
  return (
    <Container className={`${classes.body}`}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Stack>
            <Typography align="center" variant="h3" component="h2">
            Editor
            </Typography>
          </Stack>
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