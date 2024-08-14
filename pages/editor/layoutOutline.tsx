import { Box } from '@mui/material';
import Editor from './editorSection';
import Preview from './previewSection';
import Scaffold from '../../common/scaffold';

export default function editorOutline() {
  return (
    <Scaffold>
      <Box sx={{ display: 'flex' }}>
        <Editor />
        <Preview />
      </Box>
    </Scaffold>
  );
}
