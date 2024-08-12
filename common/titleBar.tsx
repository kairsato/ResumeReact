import { Container } from '@mui/material';
import TypedText from './text';

export default function TitleBar() {
  return (
    <Container>
      <TypedText textVariant="H1Headline">React Resume</TypedText>
    </Container>
  );
}
