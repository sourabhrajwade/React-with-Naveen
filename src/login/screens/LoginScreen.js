import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  '../Style.css';

 const LoginScreen = () =>{
  
  return (
    <form className='loginform-container' autoComplete="off">
        <h2 className='login-header'>Login</h2>
      <div className='login-text'>
        <TextField
          label="Username"
          variant="outlined"
        />
        </div>
        <div className='login-text'>
        <TextField
          label="Password"
          variant="outlined"
        />
      </div>
      <Button variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};

export default LoginScreen;