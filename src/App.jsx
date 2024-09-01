import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from 'react';

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
})
const handleChange = (inputIdentifier, newValue) => {
  setUserInput(prevInput => {
      const updatedInput = {
          ...prevInput,
          [inputIdentifier]: newValue
      }
      return updatedInput;
  });
};
  return (
    <>
      <Header />
      <UserInput input={userInput} handleInputChange={handleChange} />
    </>
  )
}

export default App
