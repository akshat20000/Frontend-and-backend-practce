import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GreetClass from './GreetClass'
import StateFunction from './StateFunction'
import Counter from './Counter'
import CounterClass from './CounterClass'
import Dashboard from './components/Dashboard'
import { UserContext, type UserType } from './UserContext'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ParentElement from './components/ParentElement'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// import Greet from "./Greet";
// import React from "react";
// import Person from './Person'
// import PersonList from './PersonList'
// import ParentComponent from './ParentComponent'
// import Button from './Button'
// const submitHandler=(e:React.MouseEvent)=>{
//   //Type assertion (as)
//   //Type casting (type)
//   console.log ( (e.target as HTMLButtonElement).value);


//   alert("Submit clicked");
// }
// const loginHandler=()=>{
//   alert("Login clicked");
// }
// function App() {
//   const personData={
//     name:"Code",
//     age:10
//   }
//   const List=[
//     {
//       name:"Code",
//       age:10
//     },
//     {
//       name:"Chitkara",
//       age:20
//     },
//   ]
//   return (

//     <>
//     {/* <Person details={personData}/>
//     <PersonList details={List}/> */}
//       {/* <Greet name="Code" years={10}/>
//       <Greet name="Chitkara"/> */}
//     {/* <ParentComponent>
//         <Greet name="Chitkara"/>


//     </ParentComponent>
//      */}
// <div>
//      <Button value="Submit" click={submitHandler}/>
//       <Button value="Login"  click={loginHandler}/>
//      </div>

//     </>

//   )
// }

// export default App

function App() {
  const navigate= useNavigate();

  // let data="Code";
  let obj: UserType = {
    name: "Code",
    age: 10
  }
  const clickHandler=()=>{

    navigate("/about",{state:{name:"Code"}});
    

  }
  return (
    <>
      <div>
        {/* <GreetClass name="Code"/> */}
        {/* <StateFunction/> */}
        {/* <Dashboard user={data}/> */}
        {/* <UserContext.Provider value={obj}>
    <Dashboard/>
    </UserContext.Provider> */}
        {/* <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact </a> */}
        <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/contact">Contact</NavLink>

<button onClick={clickHandler}>
  About
</button>

        <Routes>
          {/* <Route path="/" element={<div>Home Page</div>} /> */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/products/" element={<ParentElement/>}>
              <Route path="elect" element={<div>Electronic Products</div>}/>
               <Route path="fashion" element={<div>Fashion Products</div>}/>
                <Route path="food" element={<div>Food Products</div>}/>
            </Route> */}

              <Route path="/products/:category/:subcategory" element={<ParentElement/>}/>

        </Routes>

      </div>

    </>
  )

}
export default App;

