import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Leftside from './Components/leftside';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Rightside from './Components/rightside';
import Starred from './Components/Sub-components/Starred';
import Snoozed from './Components/Sub-components/Snoozed';
import Sent from './Components/Sub-components/Sent';
import Drafts from './Components/Sub-components/Drafts';




function App() {
  return (
    <>
      <div class="body-wrapper" >

        <Header />
        <Leftside />
        <Body/>
      <Footer/>
      <Rightside/>
        <Routes>
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
