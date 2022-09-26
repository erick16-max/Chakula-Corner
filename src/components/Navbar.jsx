import { useContext } from "react";
import { useState } from "react";
import {BsSearch} from "react-icons/bs";
import { appContext } from "../Context";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const {setSearchTerm} = useContext(appContext)

  const handleSearchForm = (e) => {
    e.preventDefault();
    if(searchText){
      setSearchTerm(searchText)
    }
    
  }
    return ( 
      <nav>
        <div className="logo">
          <div className="container-one"></div>
          {/* <div className="container-two"></div> */}
          <div className="container-three">
            <h3>CHAKULA <br /> <span style={{fontSize: "18px",}}>Corner</span></h3>
          </div>
        </div>
        <form className="search" onSubmit={handleSearchForm}>
        <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search.." className="search-input"/>
        <div className="search-btn"><button type="submit" ><BsSearch/></button> </div>
        </form>
      </nav>
    
     );
}
 
export default Navbar;