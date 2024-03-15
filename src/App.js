import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/header';
import Leftside from './Components/leftside';
import Footer from './Components/Footer';
import Rightside from './Components/rightside';
import Starred from './Components/Sub-components/Starred';
import Snoozed from './Components/Sub-components/Snoozed';
import Sent from './Components/Sub-components/Sent';
import Drafts from './Components/Sub-components/Drafts';
import Inbox from './Components/Sub-components/Inbox';




function App() {
  const [accesstoken,setAccesstoken]=useState("")
  const handleLogin = () => {
   const CLIENT_ID = "686675426695-cqpmmfkuf1cjhah4fq8d851paeo7g69o.apps.googleusercontent.com"
   const REDIRECT_URL = "http://localhost:3000"
   const SCOPE = "http://www.googleapi.com/auth/gmail.readonly"
   const AUTH_URL = "{"web":{"client_id":"686675426695-cqpmmfkuf1cjhah4fq8d851paeo7g69o.apps.googleusercontent.com","project_id":"gmail-clone-tanish","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","redirect_uris":["http://localhost:3000/profile"],"javascript_origins":["http://localhost:3000"]}}"
  }
  return (
    <>
      <div class="body-wrapper" >
        {accesstoken ?  (
          <div> 
            <h1>Access token</h1>
            <p>Access Token: {accesstoken}</p>
            </div>) :(
              <>
              <button onClick={handleLogin}>Login with google</button>
              </>
            
            

        )
            }
        <Header />
        <Leftside />
      <Footer/>
      <Rightside/>
        <Routes>
        <Route path="/Inbox" element={<Inbox/>} />
        <Route path="/Starred" element={<Starred/>} />
        <Route path="/Snoozed" element={<Snoozed/>} />
        <Route path="/Sent" element={<Sent/>} />
        <Route path="/Drafts" element={<Drafts/>} />
        </Routes>



      </div>

    </>
  );
}

export default App;
