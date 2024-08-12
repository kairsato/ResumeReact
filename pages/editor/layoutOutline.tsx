
import { Grid } from '@mui/material';
import Editor from './editorSection';
import Preview from './previewSection';
import TitleBar from '../../common/titleBar';

export default function editorOutline
() {
  return (
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
    
  );
}