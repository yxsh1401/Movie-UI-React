import React, { useEffect, useState, useRef } from 'react'
import GlobalAPI from '../services/GlobalAPI'
import MovieCard from './MovieCard'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const screenWidth=window.innerWidth;

function MovieList({genreId}) {

const elementRef=useRef();



        const smoothScroll = (element, distance, duration) => {
            if (!element) return;
            
            let start = element.scrollLeft;
            let startTime = performance.now();
        
            const animateScroll = (currentTime) => {
                let elapsed = currentTime - startTime;
                let progress = Math.min(elapsed / duration, 1); // Ensures progress doesn't exceed 1
        
                element.scrollLeft = start + distance * easeInOutQuad(progress);
        
                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                }
            };
        
            requestAnimationFrame(animateScroll);
        };
        
        // Easing function for a smoother transition
        const easeInOutQuad = (t) => {
            return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        };
        
        const sliderRight = (element) => {
            smoothScroll(element, window.innerWidth - 110, 500); 
        };
        
        const sliderLeft = (element) => {
            smoothScroll(element, -(window.innerWidth - 110), 500);
        };
        
        


    const [movieList, setMovieList]=useState([])
    useEffect(()=>{
        getMovieBGenreId(); 

    },[])
    const getMovieBGenreId =()=>{
        GlobalAPI.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    } 

  return (
    <div className="relative">
        <HiChevronLeft className='hidden md:block text-white text-[50px] absolute mx-[-40px] mt-[150px]  z-10 cursor-pointer' 
                    onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[50px] absolute mx-[-40px] mt-[150px] right-0 z-10 cursor-pointer' 
                    onClick={()=>sliderRight(elementRef.current)}/>
        
    <div className='flex overflow-x-auto gap-2 no-scrollbar pt-5 pb-5 px-3' ref={elementRef}>
      {movieList.map((item,index)=>(
          <MovieCard movie={item}/>
        ))}
    </div>
        
    </div> 
  ) 
}

export default MovieList
