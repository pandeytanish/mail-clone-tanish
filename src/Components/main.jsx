import Body from "./Body";
import Footer from "./Footer";
import Header from "./header";
import Leftside from "./leftside";
import Rightside from "./rightside";

const Main = () =>  {
    return(
        <>
  <div class="body-wrapper" >

   <Header/>
   <Body/>
   <Leftside/>
   <Rightside/>
   <Footer/>


  </div>
        </>
    );
}

export default Main 