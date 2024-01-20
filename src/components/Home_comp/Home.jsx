/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import { useEffect } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './home.css'
import { Link } from 'react-router-dom';
import List from "../MovieList_comp/List"

function Home() {

    const [popularMovies, setPopularMovies]= useState([""])
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=8d28fe6d1987dd9836736aa8e9bc0a0d&language=en-US")
        .then(res=> res.json())
        .then(data=> setPopularMovies(data.results))
    })
  return (
    <div>
        <div className="poster">
            <Carousel 
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                    >

                    {popularMovies.map(x =>(
                        <Link to={`/movie/${x.id}`}>
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original/${x && x.backdrop_path}`} alt="" />
                            </div>
                            <div className="posterImage_overlay">
                                <div className="posterImage_title">{x ? x.original_title: ""}</div>
                                <div className="posterImage_runtime">{x ? x.release_date: ""}
                                <span className='posterImage_rating'>
                                {x ? x.vote_average: ""}

                                <i className='fas fa-star' />{" "}
                                </span>
                                </div>
                                <div className="posterImage_disc">
                                    {x ?x.overview.split(" ").slice(0, 30).join(" ")+"..." : ""}
                                </div>
                            </div>
                        </Link>
                    ))}

            </Carousel>

            <List></List>


            
        </div>
    </div>
  )
}

export default Home



//8d28fe6d1987dd9836736aa8e9bc0a0d