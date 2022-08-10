import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
<div> 
 <div className="header"> 
   <Link to="/">
      <h2 className="header-title">Course APP</h2>
    </Link>
  </div>
</div>  
  );
};

export default Header;
