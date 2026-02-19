import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={() => handleClick(text)}>{text}</button>

const StatisticLine = ({ counter, text }) =>
  <tr>
    <td>{text}</td>
    <td>{counter}</td>
  </tr>

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) return <p>No feedback given</p>
  else return (
    <table>
      <tbody>
        <StatisticLine counter={good} text='good'/>
        <StatisticLine counter={neutral} text='neutral'/>
        <StatisticLine counter={bad} text='bad'/>
        <StatisticLine counter={all} text='all'/>
        <StatisticLine counter={average} text='average'/>
        <StatisticLine counter={positive + ' %'} text='positive'/>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  const handleClick = (text) => {
    switch (text) {
      case 'good': setGood(good + 1); break
      case 'neutral': setNeutral(neutral + 1); break
      default: setBad(bad + 1);
    }
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleClick} text='good'/>
      <Button handleClick={handleClick} text='neutral'/>
      <Button handleClick={handleClick} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </>
  )
}

export default App