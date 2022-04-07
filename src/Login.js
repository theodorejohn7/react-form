// import './App.css';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {useRef, useState} from 'react';

const isEmpty = value => value.trim().length === '';
const isSixChars = value =>value.trim().length === 5;


function Login() {

    const [formInputsValidity, setFormInputsValidity] = useState({

        name : true,
        password: true
    });



const nameInputRef=useRef();
const passwordInputRef=useRef();

const confirmHandler = (event) => {
    event.preventDefault();
    
    const enteredName = nameInputRef.current.value;

    console.log(enteredName);
    const enteredPassword = passwordInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredPasswordIsValid = !isEmpty(enteredPassword);

setFormInputsValidity({
    name : enteredNameIsValid,
    password : enteredPasswordIsValid
});


    const formIsValid = enteredNameIsValid &&enteredPasswordIsValid;



    if(!formIsValid)
    {
        return;
    }


};



  return (
      <form   onSubmit={confirmHandler}>
    <div
      className="App"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Card
        variant="outlined"
        maxWidth="sm"
        sx={{
          p: 5,
          bgcolor: "info.main",
          display: "flex",
          boxShadow: 24,
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: 250,
          borderRadius: 5,

          m: 1,
        }}
      >
        <Box component="span" sx={{ p: 0, bgcolor: "info.main" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,

              borderRadius: 1,
            }}
          >
            <Typography variant="h5" component="legend" sx={{ color: "white" }}>
              Login Form
            </Typography>
          </Box>
          <TextField
            sx={{
              borderRadius: 1,
              boxShadow: 14,
              bgcolor: "white",
            }}
            id="outlined-basic"
            label="UserName"
            fullWidth
            margin="dense"
            required
            variant="filled"
            ref={nameInputRef}
          />

          <TextField
            sx={{
              bgcolor: "white",
              boxShadow: 14,
              borderRadius: 1,
              color: "text.primary",
            }}
            required
            fullWidth
            id="password-input"
            label="Password"
            margin="dense"
            variant="filled"
            type="password"
            ref={passwordInputRef}
            autoComplete="current-password"
          />

{formInputsValidity.name &&
            <span>Enter a valid name</span>}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,

              borderRadius: 1,
            }}
          >

            <Button
              variant="contained"
              margin="dense"
              type='submit'
              sx={{
                boxShadow: 20,
                justifyContent: "center",
                bgcolor: "success.main",
              }}
            >
              Login
            </Button>

          </Box>
        </Box>
      
      </Card>
      
    </div>
    </form>
  );
}

export default Login;
