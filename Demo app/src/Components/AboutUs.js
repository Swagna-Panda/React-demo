import React from 'react';
import { useSelector } from 'react-redux';

const AboutUs = () => {
  // Fetch the tasks from the Redux store
  
  const tasks = useSelector((state) =>{
    console.log ("Data",state);
    return state.task});

//   useEffect(() => {
//     const tasks = useSelector((state) => state.task.tasks);
//     console.log("Data",tasks)
//   }, []);  

  return (
    <div>
      <h1>About Us</h1>
      <h2>Tasks</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>Title:</strong> {task.title} <br />
              <strong>Description:</strong> {task.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default AboutUs;
