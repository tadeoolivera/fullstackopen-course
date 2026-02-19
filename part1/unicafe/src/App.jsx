import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={() => handleClick(text)}>{text}</button>

const Statistic = ({ counter, text }) => <p>{text} {counter}</p>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (text) => {
    switch (text) {
      case "good": setGood(good + 1); break
      case "neutral": setNeutral(neutral + 1); break
      default: setBad(bad + 1);
    }
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleClick} text="good"/>
      <Button handleClick={handleClick} text="neutral"/>
      <Button handleClick={handleClick} text="bad"/>
      <h1>statistics</h1>
      <Statistic counter={good} text="good"/>
      <Statistic counter={neutral} text="neutral"/>
      <Statistic counter={bad} text="bad"/>
    </>
  )
}

export default App