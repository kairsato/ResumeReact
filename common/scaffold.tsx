import { Box, Button } from '@mui/material';
import TypedText from './text';

export default function Scaffold({ children }: React.PropsWithChildren<{}>) {
  return (
    <Box>
      <Box
        sx={{
          padding: '10px 40px 10px 40px',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <TypedText textVariant="SubtitleBold">React Resume</TypedText>
        <Button variant="contained">Export as</Button>
      </Box>
      <Box sx={{ backgroundColor: '#F1F5F9' }}>{children}</Box>
    </Box>
    // <Box sx={{ width: '100%' }}>
    //   <TitleBar />

    // </Box>
  );
}
