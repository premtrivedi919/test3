import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <h1>hiii</h1>

//       <form>
//         <label>
//           test
//         </label>
//       </form>
//       </header>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import ReactDOM from "react-dom/client";

  function App() {

 const [userInput, setUserInput] = useState('initial')
  
  
  const onUserInput = ({target}) => {
    setUserInput(target.value);
  }
  
 const submitted = () =>{
   
 }
  
  
 
  return (
      <div>
      <h1>UpDating Form</h1>
      <input value={userInput} type="text" onChange={onUserInput} />
      <button >CLICK TO UPDATE</button>
      <h2 style={{color: "red"}}>{userInput} </h2>
   </div>
  )
}
export default App;
