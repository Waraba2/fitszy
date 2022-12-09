import React, {useState} from 'react';
// import './Workouts.css'
import {SearchExercises, Exercises} from "../../components";
import {Box} from "@mui/material";



function Workouts () {
     const [bodyPart, setBodyPart] = useState('all');
     const [exercises, setExercises] = useState([]);
     console.log(bodyPart);
    return (
        <Box>
            <SearchExercises setExercises={setExercises}
                             bodyPart={bodyPart}
                             setBodyPart={setBodyPart}/>
            <Exercises exercises={exercises}
                       setExercises={setExercises}
                       bodyPart={bodyPart}/>

        </Box>
    );
};

export default Workouts;
