import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";

class App extends Component {
  

  render(){

    return (
      <div className="w-screen h-screen grid grid-rows-[8%_92%] ">
        <div className="row-start-1 col-start-1 col-span-4"> 
        <Navbar />
        </div>
        

        <div className="row-start-2 row-span-2  h-screen">
          <Profile />
        </div>
        
      </div>
      
    )
  }
}

export default App;