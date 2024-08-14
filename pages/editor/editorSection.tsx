import {
  Avatar,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import Kai from '../../template/Kai.json';
import TypedText from '../../common/text';
const ContentSpacer = () => <Container sx={{ height: 12 }}></Container>;

export default function Editor() {
  const [state, setState] = useState(Kai);

  const appendAttribute = (attribute: Attributes) => {
    setState({
      ...state,
      header: {
        ...state.header,
        attributes: [...state.header.attributes, attribute]
      }
    });
  };

  return (
    <Paper
      sx={{
        margin: 4,
        padding: 3,
        borderRadius: 5,
        boxShadow:
          ' 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)'
      }}
    >
      <TypedText textVariant="H1Headline">React Resume</TypedText>
      <Typography variant="h4" component="h2">
        Header
      </Typography>
      <TextField
        InputLabelProps={{ shrink: true }}
        placeholder="e.g. John Smith"
        label="Name"
        variant="outlined"
      />
      <ContentSpacer />
      <TextField
        InputLabelProps={{ shrink: true }}
        placeholder=""
        multiline={true}
        minRows={2}
        rows={2}
        label="About Me"
        variant="outlined"
      />
      <Grid container spacing={2} direction="row">
        <Grid item xs={8}>
          <Typography variant="h5" component="h2">
            Attributes (left side list)
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Button
            variant="outlined"
            onClick={() => appendAttribute({ icon: '', text: '' })}
          >
            Add
          </Button>
        </Grid>
        <Grid item xs={8}>
          <List dense={true}>
            {state.header.attributes.map((item) => {
              return (
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <EditIcon style={{ color: '#1d62fb' }} />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.text}
                    secondary={'Secondary text'}
                  />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>

      <List dense={true}>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <EditIcon style={{ color: '#1d62fb' }} />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={'Secondary text'}
          />
        </ListItem>
      </List>
      <Typography variant="h5" component="h2">
        Attributes
      </Typography>
      <Typography variant="h4" component="h2">
        Body
      </Typography>
      <Typography variant="h5" component="h2">
        Left Side
      </Typography>
      <Typography variant="h5" component="h2">
        Right Side
      </Typography>
      <Typography variant="h5" component="h2">
        Bottom
      </Typography>
    </Paper>
  );
}
