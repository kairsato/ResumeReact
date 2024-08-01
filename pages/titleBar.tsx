import { Container, Typography } from "@mui/material";
const ContentSpacer = () => <Container sx={{height:12}}></Container>

export default function TitleBar()  { 
  //const [state, setState] = useState(Kai);
  return <Container>
   <Typography variant="h3" component="h2" >React Resume</Typography>
  </Container>;
}
