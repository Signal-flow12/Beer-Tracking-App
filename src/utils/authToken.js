
const getUserToken = () => {
    return localStorage.getItem('token')
}
//console.log(getUserToken)

const setUserToken = (token) => {
    return localStorage.setItem('token', token)
}

const clearUserToken = () => {
  return localStorage.setItem('token', "")
}

export {getUserToken,setUserToken, clearUserToken}

