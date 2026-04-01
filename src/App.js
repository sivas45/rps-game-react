import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const computerChoices = ["Rock","Paper","Scissors"]

  const [computerChoice,setcomputerChoices] = useState("");
  const [userChoice,setuserChoices] = useState("");

  const generateRandom = () =>
  {
    const index =  Math.floor(Math.random()*computerChoices.length)
    const randomcompValue = computerChoices[index]
    setcomputerChoices(randomcompValue);
  }


  const [computerPoints,setCompPoint] = useState(0);
  const [userPoints,setuserPoint] = useState(0);

useEffect(() => {
  if (!userChoice || !computerChoice) return;

  if (
    (userChoice === "Rock" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Rock")
  ) {
    setCompPoint(prev => prev + 1);
  } else if (
    (computerChoice === "Rock" && userChoice === "Paper") ||
    (computerChoice === "Paper" && userChoice === "Scissors") ||
    (computerChoice === "Scissors" && userChoice === "Rock")
  ) {
    setuserPoint(prev => prev + 1);
  } else {
    setuserPoint(prev => prev);
    setCompPoint(prev => prev);
  }
}, [userChoice, computerChoice]);

  
  return (
    <div className="app">
       
     <h2>user choice : {userChoice} </h2>
      <h2>Computer choice :{computerChoice} </h2>
       

      <img  onClick ={ () => setuserChoices("Rock")} src="https://i.pinimg.com/736x/02/b0/70/02b070fc84da6c80702a26497ea6c6d5.jpg " alt="Rock pic"></img>
       <img  onClick ={ () => setuserChoices("Paper")} src="https://tse1.explicit.bing.net/th/id/OIP.Jjmy93gcAyWtHKzYwYj5bwHaFn?rs=1&pid=ImgDetMain&o=7&rm=3 " alt="paper pic"></img>
        <img  onClick ={ () => setuserChoices("Scissors")} src="https://m.media-amazon.com/images/I/61hKKZWFU1L._SL1500_.jpg " alt="scissors pic"></img>

      <br></br>
      <button onClick={generateRandom}>Play</button>

    

        <br></br>

       

        <h2>User point : {userPoints} </h2>
         <h2>Computer point : {computerPoints}</h2>

           <h2>Result :</h2>

         {userPoints === 5 && <div><h1>User Won</h1></div>}
         {computerPoints === 5 && <div><h1>Computer Won</h1></div>}

    </div>
  );
}

export default App;
