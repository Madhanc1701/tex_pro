// import React from "react";
// import './navbar.css';
// const Navbar = () => {
//     return(
//         <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           <a href="/">SRI SAI TEX</a>
//         </div>
//         <ul className="navbar-menu">
//           <li><a href="/">Home</a></li>
//         </ul>
//       </div>
//       <div className="navbar-auth">
//           <button className="login-btn">Login</button>

//         </div>
//     </nav>
//     );
// };
// export default Navbar;
import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <a href="/">SRI SAI TEX</a>
          </div>
          <ul className="navbar-menu">
            <li><a href="/">Home</a></li>
          </ul>
        </div>
        <div className="navbar-auth">
          <button className="login-btn">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
