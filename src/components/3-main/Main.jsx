import React, { useState } from "react";
import "./main.css";
import { AnimatePresence, motion, scale } from "motion/react";

export default function Main() {
const arr = [
  {
    id: 1,
    img: "/images/tailwind3.png",
    title: "Tailwind Landing Page",
    desc: "A responsive landing page built with HTML, CSS, and Tailwind CSS.",
    track: "html&css",
    link: "https://manalfathy620.github.io/tailwindproject/",
  },
  {
    id: 2,
    img: "/images/js-flor.png",
    title: "JavaScript Project",
    desc: "An interactive web project built using JavaScript and DOM manipulation.",
    track: "js",
    link: "https://stupendous-hamster-516722.netlify.app/",
  },
  {
    id: 3,
    img: "/images/html1.png",
    title: "Perfume Landing Page",
    desc: "A responsive perfume website built with HTML and CSS.",
    track: "html&css",
    link: "https://manalfathy620.github.io/p-perfume/",
  },
  {
    id: 4,
    img: "/images/html5.png",
    title: "Coffee Landing Page",
    desc: "A responsive coffee website built with HTML and CSS.",
    track: "html&css",
    link: "https://manalfathy620.github.io/coffee1/",
  },
  {
    id: 5,
    img: "/images/port.png",
    title: "Portfolio",
    desc: "A personal portfolio website built to showcase my projects and skills.",
    track: "react",
    link: "https://peaceful-fenglisu-f98d34.netlify.app/",
  },
  {
    id: 6,
    img: "/images/adan.png",
    title: "Adhan App",
    desc: "A prayer times application using an external API to display prayer times.",
    track: "js",
    link: "https://admirable-shortbread-bf47bc.netlify.app/",
  },
  {
    id: 7,
    img: "/images/weatherr.png",
    title: "Weather App",
    desc: "A weather application that displays weather information using an API.",
    track: "js",
    link: "https://heroic-brigadeiros-112f33.netlify.app/",
  },
  {
    id: 8,
    img: "/images/todo.png",
    title: "Todo App",
    desc: "A Todo application for adding, editing, deleting, and managing tasks.",
    track: "js",
    link: "https://manalfathy620.github.io/p-todo/",
  },
  {
    id: 9,
    img: "/images/jss.png",
    title: "CRUD System",
    desc: "A CRUD application for creating, reading, updating, and deleting data.",
    track: "js",
    link: "https://manalfathy620.github.io/cruds/",
  },
  {
    id: 10,
    img: "/images/upload.png",
    title: "Image Filter",
    desc: "An image filtering project with interactive controls and effects.",
    track: "js",
    link: "https://manalfathy620.github.io/p-filterimage/",
  },
  {
    id: 11,
    img: "/images/image.png",
    title: "Weather App",
    desc: "A weather application built with React to display weather information.",
    track: "node",
    link: "https://weather-jfuwic55e-sef18.vercel.app/",
  },
  {
    id: 12,
    img: "/images/dash.png",
    title: "Dashboard",
    desc: "A responsive admin dashboard built with React and MUI.",
    track: "react",
    link: "https://dashboard-sef18.vercel.app/",
  },
{
  id: 13,
  img: "/images/admin.png",
  title: "Admin Dashboard",
  desc: "A responsive e-commerce admin dashboard built with React,live api.",
  track: "react",
  link: "https://online-store-dashboard-one.vercel.app/login",
},
{
  id: 14,
  img: "/images/store.png",
  title: "Online Store ",
  desc: "A responsive store e-commerce , integrated with a live REST API to manage products, users, and store data efficiently.",
  track: "react",
  link: "https://online-store-ruddy-two.vercel.app/",
},

];
  const[arrr,setarrr]=useState("allprojects")
 let q
  if(arrr=="allprojects"){
      q = arr.filter((item)=>{
      return item
    })
  }
  else if(arrr=="html&css"){
   q=  arr.filter((item)=>{
      return item.track === "html&css"
    })
        console.log(q)

  }
  else if(arrr=="js"){
     q =  arr.filter((item)=>{
      return item.track === "js"
    })
    console.log(q)
  }
    else if(arrr=="react"){
     q =  arr.filter((item)=>{
      return item.track === "react"
    })
    console.log(q)
  }
      else if(arrr=="node"){
     q =  arr.filter((item)=>{
      return item.track === "node"
    })
    console.log(q)
  }


  const [currentPage, setCurrentPage] = useState(1);

const itemsPerPage = 6;

const lastIndex = currentPage * itemsPerPage;
const firstIndex = lastIndex - itemsPerPage;

const currentItems = q.slice(firstIndex, lastIndex);

const totalPages = Math.ceil(q.length / itemsPerPage);
  return (
    <section style={{}}>
    <main>
      <div className="left-section">
        <button onClick={()=>setarrr("allprojects")} className={arrr==="allprojects"?"active":""}>All projects</button>
        <button onClick={()=>setarrr("html&css")} className={arrr==="html&css"?"active":""}>HTML & CSS</button>
        <button onClick={()=>setarrr("js")} className={arrr==="js"?"active":""}>JavaScript</button>
        <button onClick={()=>setarrr("react")} className={arrr==="react"?"active":""}>React & MUI</button>
        <button onClick={()=>setarrr("node")} className={arrr==="node"?"active":""}>Node & Express</button>
      </div>
<div className="cards">
    <AnimatePresence>
    {currentItems.map((card)=>{
        
        return(
          
          
            <motion.div  layout initial={{transform:"scale(0)"}} animate={{transform:"scale(1)"}} transition={{type:"spring",damping:8,stiffness:50}} key={card.id} className="right-section">
          <div className="img">
          <img src={card.img} alt="" style={{height:"160px" }} />
          </div>

          <div className="content">
            <h2 style={{fontSize:"20px"}}>{card.title}</h2>
            <p>
              {card.desc}
              
            </p>
            <div className="icons">
              <div className="icon1">
                <a href="" className="icon-link"></a>
                <a href="" className="icon-github"></a>
              </div>
              <div className="icon2">
                <a href={card.link} style={{ }}>view</a>
                <a href="" className="icon-arrow-right"></a>
              </div>
            </div>
          </div>
        </motion.div>
        )
    })}
    </AnimatePresence>
    </div>

  






    </main>
<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    marginTop: "25px",
    paddingBottom: "20px",

  }}
>
  {/* Previous */}
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
    style={{
      padding: "7px 14px",
      borderRadius: "5px",
      border: "1px solid transparent",
      backgroundColor: "var(--newbg)",
      color: "var(--title)",
      cursor: currentPage === 1 ? "not-allowed" : "pointer",
      opacity: currentPage === 1 ? 0.5 : 1,
    }}
  >
    Previous
  </button>

  {/* Pages */}
  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
      style={{
        padding: "7px 12px",
        minWidth: "38px",
        borderRadius: "5px",
        border:
          currentPage === index + 1
            ? "1px solid var(--blue)"
            : "1px solid transparent",

        backgroundColor:
          currentPage === index + 1
            ? "var(--blue)"
            : "var(--newbg)",

        color:
          currentPage === index + 1
            ? "white"
            : "var(--title)",

        cursor: "pointer",
        fontWeight:
          currentPage === index + 1 ? "bold" : "normal",

        transition: "0.3s",
      }}
    >
      {index + 1}
    </button>
  ))}

  {/* Next */}
  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
    style={{
      padding: "7px 14px",
      borderRadius: "5px",
      border: "1px solid transparent",
      backgroundColor: "var(--newbg)",
      color: "var(--title)",
      cursor:
        currentPage === totalPages
          ? "not-allowed"
          : "pointer",
      opacity: currentPage === totalPages ? 0.5 : 1,
      transition: "0.3s",
    }}
  >
    Next
  </button>
</div>
  </section>
  
  );
}
