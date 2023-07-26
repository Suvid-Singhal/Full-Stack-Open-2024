const Course = () => {
    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]
    
      const Course = ({course}) => {
        const Header = ({ name }) => {
          return <h2>{name}</h2>
        }
    
        const Content = ({ parts }) => {
          const Part = ({ part }) => {
            return(
              <p>
                {part.name} {part.exercises}
              </p>
            )
          }
          return(
            <>
              {parts.map(part => <Part part={part} key={part.id} />)}
            </>
          )
        }
        const Total = ({ sum }) => <p><b>total of {sum} exercises</b></p>
    
        return(
          <>
            <h1>Web development curriculum</h1>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total sum={course.parts.reduce((x,a) => x+a.exercises,0)} />
          </>
        )
      }
      return(
        <>
            {courses.map(course => <Course course={course} key={course.id} />)}
        </>
      )
}

export default Course