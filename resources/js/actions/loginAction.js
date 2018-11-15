import { history } from '../app'
export const authenticateUser = (email, password) => {
    return (dispatch) => {
        let params = new FormData()
        let currenturl = window.location.hostname
        params.append('email', email)
        params.append('password', password)
        let url = `http://localhost:8000/database/user/login.php`
        axios.post(url, params)
            .then(response => {
                console.log(response)
                dispatch({type:"AUTHENTICATE_SUCCESS"})
                history.push('/home')
            })
    }
}

export const logoutUser = () => {
    return(dispatch) => {
        dispatch({type:"LOGOUT_USER"})
        history.push('/')
    }
}