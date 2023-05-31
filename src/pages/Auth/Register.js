import { useNavigate } from "react-router";
import { useState } from "react";
import { TextField, Button } from "@mui/material";

const Register = ({signUp}) => {
    const insitalState = { username: "", password: ""}
    const [input, setInput] = useState(insitalState);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const createdUserToken = await signUp(input);

        if(createdUserToken) {
          console.log(createdUserToken)
            navigate("/")
        }else {
            console.log("signup failed")
            navigate("/auth/login")
        }
        setInput(insitalState);
    }
     const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
     };

     return (
        <div className="login">
          <form onSubmit={handleSubmit}>
            <div className='formBox'>
            <h3>Signup</h3>
              <label htmlFor="username">Username: </label>
              <TextField className='loginField'
              color="secondary"
              size='small'
              required id="username"
              name="username"
              value={input.username}
              placeholder='username'
              onChange={handleChange}
              />
              <br />
              <br />
              <label htmlFor="password">Password: </label>
              <TextField className='loginField'
              color='secondary'
              size='small'
              required id="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              placeholder='password'
              />
              <br />
              <br />
              <div className="loginButton">
              <Button variant="contained" type="submit" value="Login">Signup</Button>
              </div>
            </div>
          </form>
        </div>
      );
    };
    
    export default Register