import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

export default function Navbar() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        })

        return () => {
            window.removeEventListener("scroll", null)
        }
    }, [])

    return (
    <div className={`navbar ${show && "nav__black"}`}>
      <Link to="/">
      <img
        src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
        alt="Netflix Logo"
        className="nav__logo"
      />
        </Link>
      <img
        src="https://img.icons8.com/cotton/50/000000/tv-show.png"
        alt=""
        className="nav__avatar"
      />
    </div>
  );
}
