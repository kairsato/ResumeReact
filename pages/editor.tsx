import { Avatar, Button, Container, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Attrributes } from "../models/attributes";
import { useEffect, useState } from "react";
import { getData, storeData } from "../common/localStorage";
const ContentSpacer = () => <Container sx={{height:12}}></Container>

export default function Editor()  { 
  const initialState  =   getData('data') as Resume
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  
   var test : Array<Attrributes> = [
    {icon:'tst',text:'tst'},
   ];

   useEffect(() => {
    storeData('data', state);
    //setData(newData);
  }, [state]);

  
  return <Stack>
            <Typography align="center" variant="h3" component="h2">
            Editor
            </Typography>
              <Typography variant="h4" component="h2">
              Header
            </Typography>
            <TextField  InputLabelProps={{ shrink: true }} placeholder='e.g. John Smith' label="Name" variant="outlined" />
            <ContentSpacer/>
            <TextField  InputLabelProps={{ shrink: true }} placeholder='' multiline={true} minRows={2} rows={2} label="About Me" variant="outlined" />
            <Grid container spacing={2} direction='row'>
              <Grid item xs={8}>
                <Typography variant="h5" component="h2">
                  Attributes (left side list)
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Button variant="outlined" startIcon={<AddIcon />} onClick={() =>{ test.push({icon:'',text:''})}}>
                  Add
                </Button>
              </Grid>
            <Grid item xs={8}>
              <List dense={true}>
             {test.map((item) => { return  <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <EditIcon  style={{ color:'#1d62fb'}} />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={ 'Secondary text'}
                  />
                </ListItem>
             } )}
                </List>
              </Grid>
            </Grid>
            
            <List dense={true}>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <EditIcon  style={{ color:'#1d62fb'}} />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={ 'Secondary text'}
                  />
                </ListItem>
            </List>
            <Typography variant="h5" component="h2">
              Attributes
            </Typography>
            <Typography  variant="h4" component="h2">
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
          </Stack> }