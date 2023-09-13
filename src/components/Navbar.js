import React from "react";

function Navbar() {

    return (

    <nav className="nav">
        
           <a href="/" className="site-title">eBuy</a>
        

        <ul>
            <li>
               <a href="/contact">Contact Us</a> 
            </li>

            <li>
               <a href="/about">About</a>    
            </li>
         </ul>
    </nav>

    )
}


export default Navbar