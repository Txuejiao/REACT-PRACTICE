import React from 'react'

const Header = (props) => {
  return(
    <div>
      <p>
        This course is {props.course}
      </p>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
       {props.part1} {props.exercise1}
       {props.part2} {props.exercise2}
       {props.part3} {props.exercise3}
    </div>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  return(
    <div>
      <Part part1 = {part1} exercise1 = {exercise1}/>
      <Part part2 = {part2} exercise2 = {exercise2}/>
      <Part part3 = {part3} exercise3 = {exercise3}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
        The number of exercise is {props.exercise1 + props.exercise2 + props.exercise3}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

return (
  <div>
    <Header course = {course} />
    <Content />
    <Total exercise1 = {exercise1} exercise2 = {exercise2} exercise3 = {exercise3}/>
  </div>
  )
}

export default App
