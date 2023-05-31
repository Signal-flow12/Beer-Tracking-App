import  {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { TextField, Button } from '@mui/material';

const Login = ({login}) => {
  const initialState = { username: "", password: ""}
  const [input, setInput] = useState(initialState)
	const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await login(input)

    if (user) {
        console.log("User is logged in as", user)
      navigate("/")
    } else {
      navigate("/auth/login")
      alert("incorrect username or password")
    }
		setInput(initialState);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };



  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <div className='formBox'>
          <h3>Login</h3>
        <div>
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
        </div>
        <br />
        <div>
          <label htmlFor="password">Password: </label>
          <TextField className='loginField'
            color='secondary'
            size='small'
            required id="password"
            name="password"
            value={input.password}
            placeholder='password'
            onChange={handleChange}
          />
        </div>
        <br />
        <div className='loginButton'>
         <Button variant="contained" type="submit" value="Login">Login</Button>
        </div>
        </div>
      </form>
    </div>
  );  
};

export default Login;