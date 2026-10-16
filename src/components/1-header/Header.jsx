import React, { useEffect, useState } from "react";
import "./header.css";

export default function Header() {

  
  const [overlay, setoverlay] = useState(false);
  const [theme,settheme]=useState(() => {
  return localStorage.getItem("theme") || "dark";
});



function handleclick() {
  settheme((prev) => (prev === "dark" ? "light" : "dark"));
}
  


  useEffect(()=>{
    localStorage.setItem("theme", theme);

  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);

  
  },[theme])


  return (
    <header className="">
      <button className="btn1" onClick={() => setoverlay(true)}>
        <span className="icon-menu"></span>
      </button>

      <div />

      <nav>
        <ul className="">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Uses</a>
          </li>
        </ul>
      </nav>

      <button className="btn2" onClick={handleclick}>
        <span className={theme==="dark"?"icon-moon-o":"icon-sun1"}></span>
      </button>

      <div className="overlay" style={{ display: overlay ? "block" : "none" }}>
        <ul>
          <li>
            <button className="btn3" onClick={() => setoverlay(false)}>

              <span className="icon-close"></span>
            </button>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Uses</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
