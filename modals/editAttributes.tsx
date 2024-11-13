import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
  }
  
export default function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value: string) => {
      onClose(value);
    };
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Attribute Editor</DialogTitle>
        <DialogContent>
            <TextField id="outlined-basic" label="Name (optional)" variant="outlined" />
            <TextField id="outlined-basic" label="Value" variant="outlined" required />
            <form>
            <Box sx={{ border: '2px dashed lightgrey', padding: 2}}>
              {/* <button type="submit">Upload</button> */}

            <input type="file" />
            {/* <button type="submit">Upload</button> */}
            </Box>
            </form>
        </DialogContent>
        <DialogActions>
        <Button variant="outlined" onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button variant="outlined" onClick={handleClose} color="primary">
                Save
            </Button>
        </DialogActions>
       
      </Dialog>
    );
  }