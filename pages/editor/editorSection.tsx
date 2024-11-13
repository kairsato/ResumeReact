import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import EmptyTemplate from '../../template/EmptyTemplate.json';
import { resume } from '../../common/constants';
import SimpleDialog from '../../modals/editAttributes';

const ContentSpacer = () => <Container sx={{ height: 12 }}></Container>;

export default function Editor() {
  const [state, setState] = useState<Resume>(EmptyTemplate);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClose = (value: string) => {
    setModalOpen(false);
    setSelectedValue(value);
  };

  useEffect(() => {
    localStorage.setItem(resume, JSON.stringify(state));
  }, [state]);

  const appendAttribute = () => {

    const maxOrder = state.header.attributes.reduce((max, item) => (item.order > max ? item.order : max), 0) + 1;
     var newAttribute: Attribute = 
    {
      order: maxOrder,
      title: "Item "+ maxOrder,
      value: "",
    }

    //icon && (newAttribute.icon = icon);

    setState({
      ...state,
      header: {
        ...state.header,
        attributes: [...state.header.attributes, newAttribute]
      }
    });
  };

  const deleteAttribute = (order : number) => {
    setState({
      ...state,
      header: {
        ...state.header,
        attributes: [...state.header.attributes.filter((item) => item.order !== order)]
      }
    });
  };


  return (
    <Stack>
      <Typography align="center" variant="h3" component="h2">
        Editor
      </Typography>
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
            Attributes
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => appendAttribute()}
          >
            Add
          </Button>
        </Grid>
        <SimpleDialog
        selectedValue={selectedValue}
        open={modalOpen}
        onClose={handleClose}
      />
        <Grid item xs={8}>
          <List dense={true}>
            {state.header.attributes.map((item) => {
              return (
                <ListItem
                  secondaryAction={
                    <Stack direction="row">
                    <IconButton edge="end" aria-label="delete" onClick={() => setModalOpen(true)}>
                      <EditIcon style={{ color: '#1d62fb' }} />
                      </IconButton>
                      <Box sx={{width:12}} />
                      <IconButton edge="end" aria-label="delete" onClick={() => deleteAttribute(item.order)}>
                        <DeleteIcon style={{ color: '#1d62fb' }} />
                      </IconButton>                       
                   </Stack>
                  }
                >
                  <ListItemAvatar>
                    {item.icon ??  <Avatar></Avatar>}                   
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={item.value}
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
    </Stack>
  );
}
