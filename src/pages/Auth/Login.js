import  {useNavigate} from 'react-router-dom'
import {useState} from 'react'

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
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name: </label>
        <input
          id="username"
          name="username"
          value={input.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;