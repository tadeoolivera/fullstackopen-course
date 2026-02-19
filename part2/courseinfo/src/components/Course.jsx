const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </div>
  )
}

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <p><strong>Number of exercises {totalExercises}</strong></p>
  )
}

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map(course =>
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
          {console.log(course.id)}
        </div>
      )}
    </div>
  )
}

export default Course