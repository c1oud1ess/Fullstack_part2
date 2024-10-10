const Header = (props) =>{
    return (
      <h2>{props.course}</h2>
    )
  }
  
  const Content = ({parts}) =>{
    return (
      <div>
        {parts.map((part) => 
          <Part key={part.id} part={part.name} exercise={part.exercises}/>
        )}
      </div>
    )
  }
  
  const Part = (props) =>{
    return (
      <p>
        {props.part} {props.exercise}
      </p>
    )
  }
  
  const Total = ({course}) =>{
    const total = course.parts.reduce((acc, num) => acc + num.exercises, 0)
    return (
      <b>total of {total} exercises</b>
    )
  }
  
  const Course = ({courses}) =>{
    return(
      <div>
        <h1>Web development curriculum</h1>
        {courses.map((course) => 
          <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts}/>
            <Total course={course} />
          </div>
        )}
      </div>
    )
  }

  export default Course