import { useNavigate } from "react-router";
import { useState } from "react";

const Register = ({signUp}) => {
    const insitalState = { username: "", password: ""}
    const [input, setInput] = useState(insitalState);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const createdUserToken = await signUp(input);

        if(createdUserToken) {
            navigate("/")
        }else {
            navigate("/auth/login")
        }
        setInput(insitalState);
    }
     const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
     };

     return (
        <>
          <h1>Register</h1>
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
            <input type="submit" value="Sign Up" />
          </form>
        </>
      );
    };
    
    export default Register