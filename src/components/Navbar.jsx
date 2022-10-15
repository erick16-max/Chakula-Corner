import { useContext } from "react";
import { useState } from "react";
import {BsSearch} from "react-icons/bs";
import { appContext } from "../Context";

const Navbar = () => {
  const {setSearchTerm, searchTerm} = useContext(appContext)

  
    return ( 
      <nav>
        <div className="logo">
          <div className="container-one"></div>
          {/* <div className="container-two"></div> */}
          <div className="container-three">
            <h3>CHAKULA <br /> <span style={{fontSize: "18px",}}>Corner</span></h3>
          </div>
        </div>
        <div className="nosubmit">
          <input className="nosubmit" type="search" placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
        </div>
      </nav>
    
     );
}
 
export default Navbar;