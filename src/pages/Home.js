import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercise, setExercises] = useState([]);
  return (
    <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} />
        <Exercises />
    </Box>
  )
}

export default Home
