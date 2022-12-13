import React, {useEffect, useState} from 'react'
import { useParams, Link } from "react-router-dom";

export default function ShowWorkouts() {
    const [workout, setWorkout] = useState([]);
    let params = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getData() {
          try {
            
            let response = await fetch("http://localhost:5000/api/workouts/" , {
                credentials: "include"
            })
            let workoutData = await response.json();

            setWorkout(workoutData);
            return workoutData;
            
          } catch (error) {
            
            console.error("Error fetching", error);
            setError(true);
          }

          // fetch("http://localhost:5000/api/workouts/")
          // .then((response) => response.json())
          // .then((json) => setWorkout(json))


        }

        getData();

    
        return () => {
        };
      }, []);

      // console.log(workout)
    return (
      <>
      <div>
        <Link to={`/createworkouts`}>Create New Workouts</Link>
      </div>
      <div>
        {
           workout.map((workout) => {
            return <div key={workout.id}>  
                      <Link to={`/workouts/${workout.id}`}>
                        <p>{workout.title}</p>
                      </Link>
                   </div>

          })
          // workout[0] === undefined || null ? <div></div> : <div>{workout[0].title}</div>
        }
      </div>
      </>
    //   <div className="listOfComments">
    //   {workout.map((workout, key) => {
    //     return (
    //       <div key={key} className="comment">
    //         {workout}
    //         <label> Username: {workout.username}</label>
    //       </div>
    //     );
    //   })}
    // </div>

        // <div>
        //     {/* <Link to={"/posts/" + params.id}>{workout.title}</Link> */}
        //     {
        //     workout[0] === undefined ? <div></div> : <div>{
        //       workout.forEach(element => {
        //         // console.log(element)
        //       })
        //       }</div>
        //     // <Workout {...workout}/>
        //     }
        // </div>
    );
}
