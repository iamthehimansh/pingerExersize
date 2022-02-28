import { useState } from "react";
export default function App() {
   const [a, setA] = useState(0)
   const [set, setSet] = useState(false)
   const [target, setTarget] = useState(0)
   if (!set) {
      return <div style={{
         width: "100vw",
         height: "100vh",
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         fontSize: ".9em",
         flexDirection: "column",
      }}>
         <input id="inp" type="number" placeholder="Set Your Goal" onChange={
            async (e) => {
               if (parseInt(e.target.value)) {
                  let target1 = (parseInt(e.target.value) > 0 ? parseInt(e.target.value) : parseInt(e.target.value) * -1)
                  await setA(target1)
                  setTarget(target1)
               }
            }
         } />
         <div style={{ marginTop: "5px" }}>
            Current is {a}
         </div>
         <button style={{ marginTop: "10px" }} onClick={() => {
            if(target&&a){
               document.getElementById("inp").value = ""
               setSet(true)
            }

         }}>Set It</button>

         <div
            style={{
               position: "absolute",
               top: 10,
               left: 5,
               fontSize: "1.8em"
            }}
         >
            Your High Score is {localStorage.getItem("hs") ?? 0}
         </div>
      </div>
   }
   return a != 0 ? <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "3em"
   }} onClick={() => {
      if (localStorage.getItem("hs") && a - 1 == 0) {
         if (parseInt(localStorage.getItem("hs")) < target) {
            localStorage.setItem("hs", `${target}`)
         }

      } else {
         if (parseInt(localStorage.getItem("hs")) < target && a - 1 == 0) {
            localStorage.setItem("hs", `${target}`)
         }
      }
      // console.log(a)
      // console.log(a-1)
      // if(a-1==0){
      //    console.log(target)
      //    localStorage.setItem("hs",`${target}`)
      // }
      setA(a - 1)
   }}>{a}<div
      style={{
         position: "absolute",
         top: 10,
         left: 5,
         fontSize: ".8em"
      }}
   >
         Your High Score is {localStorage.getItem("hs") ?? 0}
      </div></div> :
      <div
         style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            fontSize: "3em",
            color: "green"
         }}
      >
         You Did It
         <button onClick={() => {
            
            setA(0)
            setSet(false)
         }} >
            Do It Again
         </button>
         <div
            style={{
               position: "absolute",
               top: 10,
               left: 5,
               fontSize: ".8em"
            }}
         >
            Your High Score is {localStorage.getItem("hs") ?? 0}
         </div>
      </div>
      ;
}


