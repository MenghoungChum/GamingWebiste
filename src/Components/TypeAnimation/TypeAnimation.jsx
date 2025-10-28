import React from 'react';
import Typewriter from 'typewriter-effect'; // 

const TypeAnimation = () => {
  return (
    <h4 className='md:text-7xl/30 text-6xl text-white text-center mt-10 dark:text-zinc-500'>
      <Typewriter
      options={{
            loop: true,     
            delay: 150,       
          }}
        onInit={(typewriter) => {
          typewriter
            .typeString("WE ARE GAMERS SERVING GAMERS")
            .start();
        }}
      />
    </h4>
  );
};

export default TypeAnimation;
