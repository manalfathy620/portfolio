import { useState } from "react"
import Header from "./components/1-header/Header"
import Hero from "./components/2-hero/Hero"
import Main from "./components/3-main/Main"
import Contact from "./components/4-contact/Contact"
import Footer from "./components/5-footer/Footer"

function App() {
  function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
const[hh,sethh]=useState()
window.addEventListener("scroll",function(){
const hh = window.scrollY

  sethh (hh)
  

})


  return (
    <div className="container">
    <Header />
    {/* <div className="divider"  /> */}
      <Hero />
        <div className="divider"  />
      <Main />
        <div className="divider"  />
      <Contact />
        <div className="divider"  />
      <Footer />

      <button onClick={scrollToTop} className="icon-keyboard_arrow_up scroll2Top" style={{visibility:hh>0?"visible":"hidden",opacity:hh>0?"1":"0",transition:"3s"}}></button>
    
    </div>
  )
}

export default App
