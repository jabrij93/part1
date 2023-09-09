const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const ForHeader = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }

  const Header = (props) => {
    return (
      <div>
        <ForHeader course={course} />
      </div>
    )
  }

  const Part = (props) => {
    return (
      <div>
        <p>{props.part} {props.exercises}</p>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <Part part={parts[0].name} exercises={parts[0].exercises} />
        <Part part={parts[1].name} exercises={parts[1].exercises} />
        <Part part={parts[2].name} exercises={parts[2].exercises} />
      </div>
    )
  }

  const ForTotal = (props) => {
    return (
      <div>
        <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3 }</p>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <ForTotal exercise1={parts[0].exercises} exercise2={parts[1].exercises} exercise3={parts[2].exercises} />
      </div>
    )
  }

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App