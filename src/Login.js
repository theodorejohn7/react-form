// import './App.css';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React  from 'react';
// import React, { useEffect, useState } from 'react';
// const isEmpty = value => value.trim().length === '';
// const isSixChars = value =>value.trim().length === 5;

class Login extends React.Component {


  constructor(props)
  {
    super(props);


  this.state ={
    formValues: {
      username: '',
      password: '',
    },
  formErrors: {},
  isSubmit: false,

  };
// console.log(this.state.username);

//  this.setState(  {formValues: this.state });

// this.setState({formErrors:{}});
// this.setState({isSubmit:false});

// const [formValues, setFormValues] = useState(initialValues);
// const [formErrors, setFormErrors] = useState({});
// const [isSubmit, setIsSubmit] = useState(false);


  }

  componentDidMount(props) {
    // console.log(this.state.formErrors);
    // console.log('im in');
    if (Object.keys(this.state.formErrors).length === 0 && this.state.isSubmit) {
      console.log(this.formValues);
    }
  }

    validate = (values) => {
      console.log("inside validate");
    const errors = {}
    if (!this.state.username) {
      // console.log(this.state.errors.username);
      this.setState({error:  "Username is required"});

      console.log("inside username error =>  "+this.state.error);
      // console.log("error");
    }
    if (!this.state.password) {
      this.setState({error: "Password is required"});
    }
    return  errors;
  }



    handleChange = (e) => {
    // console.log(e.target);
    // const { name, value } = e.target;

    this.setState ( { name: e.target.value });


     this.setState ({setFormValues : ({ ...this.formValues, [this.name]: this.value })});

    // console.log(this.formValues);
  }


  // this.setState ={error:  "Username is required"};


    handleSubmit = (e) => {
      console.log("inside handle submit");
    e.preventDefault();
    // this.setFormErrors;
    this.setState ( {setFormErrors :(this.validate(this.formValues)) });
    this.setState ( {setIsSubmit : true});
    // this.setIsSubmit(true);
  }


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <pre>{JSON.stringify(formValues, undefined, 2)} </pre> */}
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
            maxwidth="sm"
            sx={{
              p: 5,
              bgcolor: "info.main",
              display: "flex",
              boxShadow: 24,
              flexWrap: "wrap",
              justifyContent: "center",
              maxwidth: 250,
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
                name="username"
                // required
                variant="filled"
                defaultValue={this.state.formValues.username}
                onChange={this.handleChange}
              />
              <span>{this.state.formErrors.username}</span>
              <TextField
                sx={{
                  bgcolor: "white",
                  boxShadow: 14,
                  borderRadius: 1,
  
                  color: "text.primary",
                }}
                // required
                name="password"
                fullWidth
                id="password-input"
                label="Password"
                margin="dense"
                variant="filled"
                type="password"
                value={this.state.formValues.password}
                onChange={this.handleChange}
  
                autoComplete="current-password"
              />
  
              <span>{this.state.formErrors.password}</span>
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
}









export default Login;


// // import './App.css';
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
// import React, { useEffect, useState } from 'react';

// // const isEmpty = value => value.trim().length === '';
// // const isSixChars = value =>value.trim().length === 5;



// // function Login() {



 
// // }



// class Login extends React.Component
// {

//   constructor(props)
//   {

//     super(props);
//     this.state= {
//        username: "", password: "" };
//        const [formValues, setFormValues] = this.state(initialValues);
//        const [formErrors, setFormErrors] = this.state();
//        const [isSubmit, setIsSubmit] = this.state(false);

//     }




  

  
//   // useEffect(() => {
//   //   console.log(formErrors);
//   //   if (Object.keys(formErrors).length === 0 && isSubmit) {
//   //     console.log(formValues);
//   //   }

//   // }, [formErrors])

   

//  handleChange = (e) =>  {
//   // console.log(e.target);
//   const { name, value } = e.target;
//   setFormValues({ ...formValues, [name]: value });
//   console.log(formValues);
// }

//  handleSubmit = (e) =>  {
//   e.preventDefault();
//   setFormErrors(validate(formValues));
//   setIsSubmit(true);
// }


//   validate (values)  {
//   const errors = {}
//   if (!values.username) {
//     errors.username = "Username is required";
//   }
//   if (!values.password) {
//     errors.password = "Password is required";
//   }
//   return errors;
// }
  


//   componentDidUpdate(formErrors)
//   {

//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }


//   render()
//   {
//     return (
//       <form onSubmit={handleSubmit}>
//         {/* <pre>{JSON.stringify(formValues, undefined, 2)} </pre> */}
//         <div
//           className="App"
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//           }}
//         >
//           <Card
//             variant="outlined"
//             maxWidth="sm"
//             sx={{
//               p: 5,
//               bgcolor: "info.main",
//               display: "flex",
//               boxShadow: 24,
//               flexWrap: "wrap",
//               justifyContent: "center",
//               maxWidth: 250,
//               borderRadius: 5,
  
//               m: 1,
//             }}
//           >
//             <Box component="span" sx={{ p: 0, bgcolor: "info.main" }}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   p: 1,
//                   m: 1,
  
//                   borderRadius: 1,
//                 }}
//               >
//                 <Typography variant="h5" component="legend" sx={{ color: "white" }}>
//                   Login Form
//                 </Typography>
//               </Box>
//               <TextField
//                 sx={{
//                   borderRadius: 1,
//                   boxShadow: 14,
//                   bgcolor: "white",
//                 }}
//                 id="outlined-basic"
//                 label="UserName"
//                 fullWidth
//                 margin="dense"
//                 name="username"
//                 // required
//                 variant="filled"
//                 value={formValues.username}
//                 onChange={handleChange}
//               />
//               <span>{formErrors.username}</span>
  
//               <TextField
//                 sx={{
//                   bgcolor: "white",
//                   boxShadow: 14,
//                   borderRadius: 1,
  
//                   color: "text.primary",
//                 }}
//                 // required
//                 name="password"
//                 fullWidth
//                 id="password-input"
//                 label="Password"
//                 margin="dense"
//                 variant="filled"
//                 type="password"
//                 value={formValues.password}
//                 onChange={handleChange}
  
//                 autoComplete="current-password"
//               />
  
//               <span>{formErrors.password}</span>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   p: 1,
//                   m: 1,
  
//                   borderRadius: 1,
//                 }}
//               >
  
//                 <Button
//                   variant="contained"
//                   margin="dense"
//                   type='submit'
//                   sx={{
//                     boxShadow: 20,
//                     justifyContent: "center",
//                     bgcolor: "success.main",
//                   }}
//                 >
//                   Login
//                 </Button>
  
//               </Box>
//             </Box>
  
//           </Card>
  
//         </div>
//       </form>
//     );
//   }

// }



// export default Login;



// // import './App.css';
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
// import {useRef, useState} from 'react';

// const isEmpty = value => value.trim().length === '';
// const isSixChars = value =>value.trim().length === 5;


// function Login() {

//     const [formInputsValidity, setFormInputsValidity] = useState({

//         name : true,
//         password: true
//     });



// const nameInputRef=useRef();
// const passwordInputRef=useRef();

// const confirmHandler = (event) => {
//     event.preventDefault();
    
//     const enteredName = nameInputRef.current.value;

//     console.log(enteredName);
//     const enteredPassword = passwordInputRef.current.value;

//     const enteredNameIsValid = !isEmpty(enteredName);
//     const enteredPasswordIsValid = !isEmpty(enteredPassword);

// setFormInputsValidity({
//     name : enteredNameIsValid,
//     password : enteredPasswordIsValid
// });


//     const formIsValid = enteredNameIsValid &&enteredPasswordIsValid;



//     if(!formIsValid)
//     {
//         return;
//     }


// };



//   return (
//       <form   onSubmit={confirmHandler}>
//     <div
//       className="App"
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "center",
//       }}
//     >
//       <Card
//         variant="outlined"
//         maxWidth="sm"
//         sx={{
//           p: 5,
//           bgcolor: "info.main",
//           display: "flex",
//           boxShadow: 24,
//           flexWrap: "wrap",
//           justifyContent: "center",
//           maxWidth: 250,
//           borderRadius: 5,

//           m: 1,
//         }}
//       >
//         <Box component="span" sx={{ p: 0, bgcolor: "info.main" }}>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               p: 1,
//               m: 1,

//               borderRadius: 1,
//             }}
//           >
//             <Typography variant="h5" component="legend" sx={{ color: "white" }}>
//               Login Form
//             </Typography>
//           </Box>
//           <TextField
//             sx={{
//               borderRadius: 1,
//               boxShadow: 14,
//               bgcolor: "white",
//             }}
//             id="outlined-basic"
//             label="UserName"
//             fullWidth
//             margin="dense"
//             required
//             variant="filled"
//             ref={nameInputRef}
//           />

//           <TextField
//             sx={{
//               bgcolor: "white",
//               boxShadow: 14,
//               borderRadius: 1,
//               color: "text.primary",
//             }}
//             required
//             fullWidth
//             id="password-input"
//             label="Password"
//             margin="dense"
//             variant="filled"
//             type="password"
//             ref={passwordInputRef}
//             autoComplete="current-password"
//           />

// {formInputsValidity.name &&
//             <span>Enter a valid name</span>}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               p: 1,
//               m: 1,

//               borderRadius: 1,
//             }}
//           >

//             <Button
//               variant="contained"
//               margin="dense"
//               type='submit'
//               sx={{
//                 boxShadow: 20,
//                 justifyContent: "center",
//                 bgcolor: "success.main",
//               }}
//             >
//               Login
//             </Button>

//           </Box>
//         </Box>
      
//       </Card>
      
//     </div>
//     </form>
//   );
// }

// export default Login;
