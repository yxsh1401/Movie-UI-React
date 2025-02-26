import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <div className='flex flex-col items-center hover:scale-110 transition-all duration-150 ease-in cursor-pointer'>
      <img 
        src={IMAGE_BASE_URL + movie.poster_path} 
        className='w-[110px] md:w-[180px] rounded-lg 
        hover:border-2 border-white 
        ' 
      />
      <h2 className='text-white text-[15px] mt-2 text-center w-[110px] md:w-[260px]'>
        {movie.title}
      </h2>
    </div>
  );
}

export default MovieCard;
