const Part = ({ part, exercises }) => {
  return (
    <p>{part} {exercises}</p>
  )
}

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({ p1, p2, p3, e1, e2, e3 }) => {
  return (
    <div>
      <Part part={p1} exercises={e1} />
      <Part part={p2} exercises={e2} />
      <Part part={p3} exercises={e3} />
    </div>
  )
}

const Total = ({ totalExercises }) => {
  return (
    <p>Number of exercises {totalExercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3} />
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App