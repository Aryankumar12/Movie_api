import React from 'react'
import "./list.css"
import Card from '../Card_comp/Card'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function List() {
    const [moiveList, setMovieList]= useState([""])
    const {types}= useParams()
    console.log(types)
    useEffect(()=>{
        getData()
    }, [])
    useEffect(()=>{
        
    }, [types])


    const getData= ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${types ? types:"upcoming"}?api_key=8d28fe6d1987dd9836736aa8e9bc0a0d&language=en-US`)
        .then(res=> res.json())
        .then(data=> setMovieList(data.results))
    }
    useEffect(()=>{
       
    })
  return (

   <>


                <h2 className='movie_title'>{(types ? types : "upcoming").toUpperCase()}</h2>
            <div className="movie_list">


                <div className="movie_card">
                    {
                        moiveList.map(movie =>(
                            <Card x = {movie}/>
                        ))
                    }
                </div>
            </div>

   </>
  )
}

export default List