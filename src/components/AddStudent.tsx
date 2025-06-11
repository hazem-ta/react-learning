import { Button, Paper, TextField } from "@mui/material";


export const AddStudent = () => {

  
  
    return (
    <Paper sx={{display:"flex", margin:1, gap:1, marginTop:"20px" }}>
        <TextField id="outlined-basic" label="Full Name" name="name" variant="outlined" />
        <TextField id="outlined-basic" label="Age" name="age" variant="outlined" />
        <TextField id="outlined-basic" label="Mail" name="mail" variant="outlined" />
        <Button variant="contained">Submet</Button>
    </Paper> 
  );
};
