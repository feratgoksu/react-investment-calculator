import { useState } from "react";
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
function App() {


  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = Object.values(userInput).every((value) => value > 0);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    {!inputIsValid && <p className="center">Please fill out all fields</p>}
     {inputIsValid && <Results input={userInput} />}  
    </>
  )
}

export default App
