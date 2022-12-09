import React, {useEffect, useState} from 'react'
import { useParams, Link } from "react-router-dom";
import CreateExercise from './CreateExercise';

export default function Workouts(props) {
  const [workout, setWorkout] = useState([])
  const [exercise, setExercise] = useState([])
  const [error, setError] = useState(false);
  let params = useParams();


  useEffect(() => {
    async function getWorkoutData() {
      try {
        
        let response = await fetch(`http://localhost:5000/api/workouts/${params.id}` , {
            credentials: "include"
        })
        let workoutData = await response.json();

        setWorkout(workoutData);
        return workoutData;
        
      } catch (error) {
        
        console.error("Error fetching", error);
        setError(true);
      }
    }

    async function getExerciseData() {
      try {
        let response = await fetch(`http://localhost:5000/api/exercise/${params.id}` , {
            credentials: "include"
        })

        let exerciseData = await response.json();
        
        setExercise(exerciseData);
        console.log(exerciseData)
        return exerciseData;
        
      } catch (error) {
        
        console.error("Error fetching", error);
        setError(true);
      }
    }

    

    getWorkoutData();
    getExerciseData();


    return () => {
    };
  }, [params]);


  return (
    <div>
      <div>
        <div key={workout.id}>
           {
           exercise.map((exercise) => {
            return <div key={exercise.id}> 
                      <Link to={`exercise/exerciseId/${exercise.id}`}>
                        <p>{exercise.name}</p>
                      </Link>
                   </div>
          })
          // workout[0] === undefined || null ? <div></div> : <div>{workout[0].title}</div>
          
          }
          <Link to={`createexercise/${params.id}`}>
            {/* <CreateExercise workoutId = {params.id}/> */}
            <p>Create Exercise</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

//navagiate to exercise list. then do the the exercise/id route