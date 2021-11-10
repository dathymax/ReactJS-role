import React, { useState } from "react";
import { useHistory } from "react-router-dom"

export default function LoginHook() {
    let history = useHistory()
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    // let [isLogin, setLogin] = useState(localStorage.getItem("accessToken") != null)

    let setParams = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        }
        if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    let login = () => {
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded")

        var urlencoded = new URLSearchParams()
        urlencoded.append("username", username)
        urlencoded.append("password", password)

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow',
        }

        fetch("https://learn-api.jmaster.io:8443/api/login", requestOptions)
            .then(response => {
                console.log(response)
                if (response.ok) {
                    return response.json()
                }

                throw new Error(response.status)
            })
            .then(result => {
                console.log(result)
                localStorage.setItem("accessToken", result.accessToken)
                // setLogin(true)
                history.replace("/admin")
            })
            .catch(error => {
                console.log('error', error)
                alert("Username, password are wrong")
            })
    }

    // let onLogoutSuccess = () => {
    //     setLogin(false)
    // }

    return <div>
        {/* {isLogin ?  */}
            {/* <p>Hello World!</p> :  */}
            <form action="">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" onChange={setParams} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={setParams} />
                </div>
                <div>
                    <button type="button" onClick={login}>Login</button>
                </div>
            </form>
        {/* } */}
    </div>
}