import { history } from '../app'

export const changePassword = (userid, currentpassword, newpassword) => {
    let params = new FormData()
    let currenturl = window.location.hostname
    params.append('user', userid)
    params.append('oldPassword', currentpassword)
    params.append('newPassword', newpassword)
    let url = `http://${currenturl}:80/database/user/chPassword.php`
    axios.post(url, params)
        .then(response => {
            console.log("Success!")
            history.push('/home/settings')
        })
    
}
