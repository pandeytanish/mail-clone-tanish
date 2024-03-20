import { useEffect, useState } from "react";
function Login () {
    
    const [accessToken, setAccessToken] = useState("")
    const handleLogin = () => {
        const CLIENT_ID = "686675426695-cqpmmfkuf1cjhah4fq8d851paeo7g69o.apps.googleusercontent.com"
        const REDIRECT_URI = "http://localhost:3000/Inbox"
        const SCOPE = "https://www.googleapis.com/auth/gmail.readonly"
        const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`;
        window.location.href = AUTH_URL;
    };
    const getAccessToken = () => {
        const url = window.location.href
        const token = url.match(/access_token=([^&]+)/)
        localStorage.setItem("Token",token && token[1])
        console.log("Token is", localStorage.getItem("Token"))

    }
    useEffect(() => (
        getAccessToken()
    ), [])

    return (
        <>
          <div>
            {accessToken ? (
                <div>
                    <h1>Access token</h1>
                    <p>Access Token: {accessToken}</p>
                </div>) : (
                <>
                    <button onClick={handleLogin}>Login with google</button>
                    {/* <button onClick={() => getEmailData()}> Get Emails</button>
                    <button onClick={() => fetchMail("18e462bcf161bc72")}> Fetch Emails</button> */}
                </>
            )
            }
        </div>
        </>
    )
}

export default Login