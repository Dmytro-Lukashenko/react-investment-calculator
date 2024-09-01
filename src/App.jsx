import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";
import { useState } from 'react';

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevInput => {
      const updatedInput = {
        ...prevInput,
        [inputIdentifier]: +newValue
      }
      return updatedInput;
    });
  };
  return (
    <>
      <Header />
      <UserInput input={userInput} handleInputChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
