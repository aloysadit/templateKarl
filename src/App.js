import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom';
import WelcomeHome from './component/WelcomeHome';
import FullUlang from './component/FullUlang';
import Xcart from './component/Xcart';
import Xshop from './component/Xshop';
import Xproduct from './component/Xproduct';
import Xcheckout from './component/Xcheckout';
import FullUlang2 from './component/FullUlang2';



class App extends Component {
  render() {
    return (
      <div>

      <FullUlang2/>
       
      {/* <Route exact path="/" component={WelcomeHome}/>
      <Route path="/Xcart" component={Xcart}/>
      <Route path="/Xshop" component={Xshop}/>
      <Route path="/Xproduct" component={Xproduct}/>
      <Route path="/Xcheckout" component={Xcheckout}/> */}
    

       {/* <WelcomeHome/> */}

       {/* <Link to="/cart">Footer</Link>
       <Link to="/home"> HOME </Link> */}

       
       {/* <Route path="/home" component={WelcomeHome}/> */}
     
       
     
       
      </div>
    );
  }
}

export default App;
