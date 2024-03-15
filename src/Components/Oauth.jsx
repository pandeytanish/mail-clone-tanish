import { useState } from "react";
const Oauth = () => { 
    const [accessToken,setAccessToken]=useState("")
    const handleLogin = () => {
     const CLIENT_ID = "686675426695-cqpmmfkuf1cjhah4fq8d851paeo7g69o.apps.googleusercontent.com"
     const REDIRECT_URI = "http://localhost:3000"
     const SCOPE = "https://www.googleapis.com/auth/gmail.readonly"
     const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`;
      window.location.href= AUTH_URL 
    }

    return (
        <div className="body-wrapper" >
        {accessToken ?  (
          <div> 
            <h1>Access token</h1>
            <p>Access Token: {accessToken}</p>
            </div>) :(
              <>
              <button onClick={handleLogin}>Login with google</button>
              </>
        )
            }
      </div>
    )


};
export default Oauth;