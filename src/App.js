import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Leftside from './Components/leftside';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Rightside from './Components/rightside';
import Starred from './Components/Starred';




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
        </Routes>



      </div>

    </>
  );
}

export default App;
