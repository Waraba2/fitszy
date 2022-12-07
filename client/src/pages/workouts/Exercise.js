import React, {useEffect, useState} from 'react'
import { useParams, Link } from "react-router-dom";


export default function Exercise() {
    const [exercise, setExercise] = useState([])
    const [error, setError] = useState(false);
    let params = useParams();

    useEffect(() => {
        async function getExerciseData() {
          try {
            let response = await fetch(`http://localhost:5000/api/exercise/exerciseId/${params.id}` , {
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
    
        getExerciseData();
    
        return () => {
        };
      }, [params]);
    
  return (
    <div>
        <p>{exercise.name}</p>
    </div>
  )
}
