import React, { useEffect, useState, useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import GlobalAPI from '../services/GlobalAPI';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        getTrendingVideos();
    }, []);

    const getTrendingVideos = () => {
        GlobalAPI.getTrendingVideos()
            .then(resp => {
                console.log("API Response:", resp.data.results);
                if (resp.data && resp.data.results) {
                    setMovieList(resp.data.results);
                }
            })
            .catch(error => console.error("Error fetching trending videos:", error));
    };

    const smoothScroll = (element, distance, duration) => {
        if (!element) return;
        let start = element.scrollLeft;
        let startTime = performance.now();

        const animateScroll = (currentTime) => {
            let elapsed = currentTime - startTime;
            let progress = Math.min(elapsed / duration, 1);
            element.scrollLeft = start + distance * easeInOutQuad(progress);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    const sliderRight = (element) => {
        smoothScroll(element, window.innerWidth - 110, 500);
    };

    const sliderLeft = (element) => {
        smoothScroll(element, -(window.innerWidth - 110), 500);
    };

    return (
        <div className="relative">
            <HiChevronLeft className='hidden md:block text-white text-[50px] absolute mx-8 mt-[250px] cursor-pointer' 
                onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:block text-white text-[50px] absolute mx-8 mt-[250px] cursor-pointer right-0' 
                onClick={() => sliderRight(elementRef.current)} />
            
            <div className='flex overflow-x-auto w-full px-16 py-4 no-scrollbar scroll-smooth md:scroll-auto' ref={elementRef}>
                {movieList.map((item, index) => index <= 5 && (
                    <div key={item.id} className="relative min-w-full md:h-[450px] mr-5 rounded-md group">
                        {/* Image */}
                        <img 
                            src={IMAGE_BASE_URL + item.backdrop_path} 
                            alt="Movie Poster" 
                            className='w-full h-full object-cover object-left-top rounded-md 
                            hover:shadow-lg shadow-white transition-all duration-100 ease-in'
                        />
                        {/* Text Overlay (Hidden until Hover) */}
                        <div className="absolute bottom-4 left-4 bg-opacity-50 text-white p-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-[40px] font-semibold font-serif [text-shadow:_4px_4px_6px_rgba(0,0,0,0.8)]">{item.title || item.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;
