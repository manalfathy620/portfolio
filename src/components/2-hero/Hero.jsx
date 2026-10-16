import "./hero.css"
import Lottie from "lottie-react";
import { useRef } from "react";
import developer from "../../assets/animation/Programming Computer.json"
import { motion } from "motion/react"
export default function Hero() {
    const lottieRef = useRef();
  return (
    <section className="hero">
      <div className="left-section">
        <div className="avatar">
          <motion.img initial={{transform:"scale(0)"}} animate={{transform:"scale(1)"}} transition={{damping:6,type:"spring",tiffness:100}} src="/logo.png" alt="" />
          <div className="icon-verified"></div>
        </div>

        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}>Full Stack Developer & Software Engineer.</motion.h1>
        <p>I’m Manal, a passionate Full Stack Developer who builds modern, responsive web applications with React, Node.js, Express, and MongoDB. I enjoy turning ideas into clean, functional, and scalable digital experiences.</p>
        <div className="btns">
          <span className="icon-github"></span>
          <span className="icon-twitter"></span>
          <span className="icon-linkedin"></span>
          <span  className="icon-instagram"></span>
        </div>

      </div>
      <div className="right-section">
          <Lottie.default className="dev-animation"  lottieRef={lottieRef} onLoadedImages={()=>{
             lottieRef.current.setSpeed(0.5)
          }} animationData={developer} />

      </div>
    </section>
  )
}
