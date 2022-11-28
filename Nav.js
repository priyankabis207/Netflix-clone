import React, {useEffect, useState} from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll",handleShow);
          };
    }, []);
    

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
        className="nav-logo"
      />
      <img
        src="https://i.imgur.com/Pkh2TEh.png"
        alt="User avatar"
        className="nav-avatar"
      />
    </div>
  )
}

export default Nav
