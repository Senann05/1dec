// import { useState } from "react";
// const App =()=>{
//   const[email,setEmail]=setEmail("");
//   const[parol,SEtParol]= SEtParol("")


// return(
//   <div>
//      <h1>Login</h1>
//     <div>
//     <label>E-mail</label>
//     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
// </div>
// <div>
//   <label>Password</label>
//   <input type="password" value={parol} onChange={(e) => SEtParol(e.target.value)} ></input>
// </div>
//   </div>
// );
// };
// export default App;

import React, { useState, useEffect } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("");
    console.log("Parol üçün: Ən azı 8 simvol.");
  },[]);

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Email:</label>

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
        placeholder="E-mail üçün: Yalnız .ru domenlərinə icazə verilir."></input>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
        placeholder="Ən azı 8 simvol."></input>
      </div>
      <div>
      <button>Login</button></div>
    </div>
  );
};

export default App;
